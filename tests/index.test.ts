import pyData from '../src/py-data';
import pyProvinceCityDistrict from '../src/py-province-city-district';
import pyProvinceCity from '../src/py-province-city';
import pyProvince from '../src/py-province';
import pyCity from '../src/py-city';
import pyDistrict from '../src/py-district';
import pyStreet from '../src/py-street';

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
