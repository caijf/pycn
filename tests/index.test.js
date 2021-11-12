const pyData = require('../lib/py-data');
const pyProvinceCityDistrict = require('../lib/py-province-city-district');
const pyProvinceCity = require('../lib/py-province-city');
const pyProvince = require('../lib/py-province');
const pyCity = require('../lib/py-city');
const pyDistrict = require('../lib/py-district');
const pyStreet = require('../lib/py-street');

describe('base', () => {
  it('should be defined', () => {
    expect(pyData).toBeDefined();
    expect(pyProvinceCityDistrict).toBeDefined();
    expect(pyProvinceCity).toBeDefined();
    expect(pyProvince).toBeDefined();
    expect(pyCity).toBeDefined();
    expect(pyDistrict).toBeDefined();
    expect(pyStreet).toBeDefined();
  });

  it('length', () => {
    expect(pyData.length).toBe(34);
    expect(pyProvinceCityDistrict.length).toBe(34);
    expect(pyProvinceCity.length).toBe(34);
    expect(pyProvince.length).toBe(34);
    expect(pyCity.length).toBe(368);
    expect(pyDistrict.length).toBe(2840);
    expect(pyStreet.length).toBe(41267);
  });
});
