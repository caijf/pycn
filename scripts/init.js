const fse = require('fs-extra');
const path = require('path');
const { Readable } = require('stream');
const { FormDataEncoder } = require('form-data-encoder');
const pinyin4js = require('pinyin4js');
const { FormData } = require('formdata-node');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const url = 'https://lbs.amap.com/service/api/restapi?keywords=中国&subdistrict=4&extensions=base';

const form = new FormData();
form.set('type', 'config/district');
form.set('version', 'v3');

const encoder = new FormDataEncoder(form);

// 生成随机IP， 赋值给 X-Forwarded-For
function getRandomIP() {
  return Array.from(Array(4)).map(() => parseInt(Math.random() * 255)).join('.')
}

const options = {
  method: "post",
  headers: {
    ...encoder.headers,
    'X-Forwarded-For': getRandomIP(),
    rejectUnauthorized: false,
    'Postman-Token': Date.now(),
    // 'Cache-Control': 'no-cache',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2924.87 Safari/537.36'
  },
  body: Readable.from(encoder)
}

const fetchData = () => fetch(url, options);

const transformPy = (district) => {
  let newDistrict = {};
  if (typeof district === 'object' && district.name) {
    // eslint-disable-next-line no-unused-vars
    const { citycode, center, districts, ...rest } = district;
    newDistrict = {
      ...rest,
      py: pinyin4js.convertToPinyinString(district.name, '', pinyin4js.WITHOUT_TONE)
    };
    if (Array.isArray(districts) && districts.length > 0) {
      newDistrict.districts = districts.map(transformPy);
    }
  }
  return newDistrict;
}

const DATA_DIR = path.join(__dirname, '../data');
const DATA_FILE = path.join(DATA_DIR, 'data.json');
const PY_DATA_FILE = path.join(DATA_DIR, 'py-data.json');

const run = async () => {
  try {
    const response = await fetchData();

    const json = await response.json();
    const text = JSON.stringify(json);

    if (json?.status !== '1') {
      throw json;
    }

    await fse.ensureDir(DATA_DIR);

    // 写入data/data.json
    await fse.outputFile(DATA_FILE, text);

    // 写入data/py-data.json
    const districts = json.districts[0].districts;
    const pyResult = districts.map(transformPy);
    await fse.outputFile(PY_DATA_FILE, JSON.stringify(pyResult));
  } catch (err) {
    console.log(err);
  }
}

run();
