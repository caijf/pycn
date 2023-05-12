const path = require('path');
const fse = require('fs-extra');
const pyData = require('../data/py-data.json');

const SRC_DIR = path.join(__dirname, '../src');

/**
 * 生成源文件
 *
 * @param {string} fileName 文件名
 * @param {string} moduleName 模块名
 * @param {string} exportsCode 代码块
 */
const createSource = async (fileName, moduleName, exportsCode) => {
  const code = `const ${moduleName} = ${exportsCode};
export default ${moduleName};`;

  const retFileName = `${fileName}.ts`;
  const filePath = path.join(SRC_DIR, retFileName);

  try {
    await fse.ensureDir(SRC_DIR);
    await fse.outputFile(filePath, code);
    console.log(`done! ${filePath}`);
  } catch (err) {
    console.log(`error! ${filePath}`);
    console.log(err);
  }
};

const LEVEL_FLAG = {
  PROVINCE: 'province',
  CITY: 'city',
  DISTRICT: 'district',
  STREET: 'street'
};

/** @typedef {{adcode:string;name:string;py:string;}} DataType */
/** @typedef {DataType&{districts?:CascadeDataType[]}} CascadeDataType */

/** @type {DataType[]} */
const province = [];

/** @type {DataType[]} */
const city = [];

/** @type {DataType[]} */
const district = [];

/** @type {DataType[]} */
const street = [];

/** @type {CascadeDataType[]} */
let province_city = [];

/** @type {CascadeDataType[]} */
let province_city_district = [];

const trans = (/** @type {typeof pyData} */ dists) => {
  dists.forEach((item) => {
    const { districts, level, ...rest } = item;
    if (level === LEVEL_FLAG.PROVINCE) {
      province.push(rest);
    } else if (level === LEVEL_FLAG.CITY) {
      city.push(rest);
    } else if (level === LEVEL_FLAG.DISTRICT) {
      district.push(rest);
    } else if (level === LEVEL_FLAG.STREET) {
      street.push(rest);
    }

    if (Array.isArray(districts) && districts.length > 0) {
      trans(districts);
    }
  });
};

/**
 * 转换级联数据
 *
 * @param {typeof pyData} dists 数据列表
 * @param {string} untilLevel 数据标记
 * @returns {CascadeDataType[]}
 */
const transCascade = (dists, untilLevel) => {
  return dists.map((item) => {
    const { districts, level, ...rest } = item;
    if (level === untilLevel) {
      return rest;
    }

    if (Array.isArray(districts) && districts.length > 0) {
      return {
        ...rest,
        districts: transCascade(districts, untilLevel)
      };
    }

    return {
      ...rest,
      districts
    };
  });
};

trans(pyData);

province_city = transCascade(pyData, LEVEL_FLAG.CITY);
province_city_district = transCascade(pyData, LEVEL_FLAG.DISTRICT);

// 省
const PY_PROVINCE_MODULE = 'pyProvince';
const PY_PROVINCE_FILE = 'py-province';

// 市
const PY_CITY_MODULE = 'pyCity';
const PY_CITY_FILE = 'py-city';

// 区
const PY_DISTRICT_MODULE = 'pyDistrict';
const PY_DISTRICT_FILE = 'py-district';

// 街道
const PY_STREET_MODULE = 'pyStreet';
const PY_STREET_FILE = 'py-street';

// 省市
const PY_PROVINCE_CITY_MODULE = 'pyProvinceCity';
const PY_PROVINCE_CITY_FILE = 'py-province-city';

// 省市区
const PY_PROVINCE_CITY_DISTRICT_MODULE = 'pyProvinceCityDistrict';
const PY_PROVINCE_CITY_DISTRICT_FILE = 'py-province-city-district';

// 省市区街道
const PY_DATA_MODULE = 'pyData';
const PY_DATA_FILE = 'py-data';

const run = async () => {
  await createSource(PY_PROVINCE_FILE, PY_PROVINCE_MODULE, JSON.stringify(province));
  await createSource(PY_CITY_FILE, PY_CITY_MODULE, JSON.stringify(city));
  await createSource(PY_DISTRICT_FILE, PY_DISTRICT_MODULE, JSON.stringify(district));
  await createSource(PY_STREET_FILE, PY_STREET_MODULE, JSON.stringify(street));
  await createSource(PY_PROVINCE_CITY_FILE, PY_PROVINCE_CITY_MODULE, JSON.stringify(province_city));
  await createSource(
    PY_PROVINCE_CITY_DISTRICT_FILE,
    PY_PROVINCE_CITY_DISTRICT_MODULE,
    JSON.stringify(province_city_district)
  );
  await createSource(PY_DATA_FILE, PY_DATA_MODULE, JSON.stringify(pyData));
};

run();
