const path = require('path');
const fse = require('fs-extra');
const pyData = require('../data/py-data.json');

const LIB_DIR = path.join(__dirname, '../lib');

const createType = async (fileName, moduleName, type = 'single') => {
  const retType = type === 'single' ? 'SingleDistrict' : 'CascadeDistrict';
  const code = `import { ${retType} } from '../types/interface';
declare const ${moduleName}: ${retType}[];
export default ${moduleName};
`;
  const retFileName = fileName.indexOf('.d.ts') > -1 ? fileName : `${fileName}.d.ts`;
  const filePath = path.join(LIB_DIR, retFileName);

  try {
    await fse.ensureDir(LIB_DIR);
    await fse.outputFile(filePath, code);
    console.log(`done! ${filePath}`);
  } catch (err) {
    console.log(`error! ${filePath}`);
    console.log(err);
  }
};

const createUMD = async (fileName, moduleName, exportsCode, type = 'single') => {
  const code = `(function (root, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.${moduleName} = factory();
  }
}(this, function () {
  return ${exportsCode};
}));`;

  const retFileName = fileName.indexOf('.js') > -1 ? fileName : `${fileName}.js`;
  const filePath = path.join(LIB_DIR, retFileName);

  try {
    await fse.ensureDir(LIB_DIR);
    await fse.outputFile(filePath, code);
    await createType(fileName, moduleName, type);
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

const province = [];
const city = [];
const district = [];
const street = [];
let province_city = [];
let province_city_district = [];

const trans = (dists) => {
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
const PY_PROVINCE_TYPE = 'single';

// 市
const PY_CITY_MODULE = 'pyCity';
const PY_CITY_FILE = 'py-city';
const PY_CITY_TYPE = 'single';

// 区
const PY_DISTRICT_MODULE = 'pyDistrict';
const PY_DISTRICT_FILE = 'py-district';
const PY_DISTRICT_TYPE = 'single';

// 街道
const PY_STREET_MODULE = 'pyStreet';
const PY_STREET_FILE = 'py-street';
const PY_STREET_TYPE = 'single';

// 省市
const PY_PROVINCE_CITY_MODULE = 'pyProvinceCity';
const PY_PROVINCE_CITY_FILE = 'py-province-city';
const PY_PROVINCE_CITY_TYPE = 'cascade';

// 省市区
const PY_PROVINCE_CITY_DISTRICT_MODULE = 'pyProvinceCityDistrict';
const PY_PROVINCE_CITY_DISTRICT_FILE = 'py-province-city-district';
const PY_PROVINCE_CITY_DISTRICT_TYPE = 'cascade';

// 省市区街道
const PY_DATA_MODULE = 'pyData';
const PY_DATA_FILE = 'py-data';
const PY_DATA_TYPE = 'cascade';

const run = async () => {
  await createUMD(PY_PROVINCE_FILE, PY_PROVINCE_MODULE, JSON.stringify(province), PY_PROVINCE_TYPE);
  await createUMD(PY_CITY_FILE, PY_CITY_MODULE, JSON.stringify(city), PY_CITY_TYPE);
  await createUMD(PY_DISTRICT_FILE, PY_DISTRICT_MODULE, JSON.stringify(district), PY_DISTRICT_TYPE);
  await createUMD(PY_STREET_FILE, PY_STREET_MODULE, JSON.stringify(street), PY_STREET_TYPE);
  await createUMD(
    PY_PROVINCE_CITY_FILE,
    PY_PROVINCE_CITY_MODULE,
    JSON.stringify(province_city),
    PY_PROVINCE_CITY_TYPE
  );
  await createUMD(
    PY_PROVINCE_CITY_DISTRICT_FILE,
    PY_PROVINCE_CITY_DISTRICT_MODULE,
    JSON.stringify(province_city_district),
    PY_PROVINCE_CITY_DISTRICT_TYPE
  );
  await createUMD(PY_DATA_FILE, PY_DATA_MODULE, JSON.stringify(pyData), PY_DATA_TYPE);
};

run();
