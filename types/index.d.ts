type SingleDistrict = {
  adcode: string;
  name: string;
  py: string;
}

type CascadeDistrict = SingleDistrict & {
  districts: SingleDistrict[];
}

declare module 'pycn' {
  const pyData: CascadeDistrict[];
  export default pyData;
}

declare module 'pycn/lib/py-data' {
  const pyData: CascadeDistrict[];
  export default pyData;
}

declare module 'pycn/lib/py-province-city-district' {
  const pyProvinceCityDistrict: CascadeDistrict[];
  export default pyProvinceCityDistrict;
}

declare module 'pycn/lib/py-province-city' {
  const pyProvinceCity: CascadeDistrict[];
  export default pyProvinceCity;
}

declare module 'pycn/lib/py-province' {
  const pyProvince: SingleDistrict[];
  export default pyProvince;
}

declare module 'pycn/lib/py-city' {
  const pyCity: SingleDistrict[];
  export default pyCity;
}

declare module 'pycn/lib/py-district' {
  const pyDistrict: SingleDistrict[];
  export default pyDistrict;
}

declare module 'pycn/lib/py-street' {
  const pyStreet: SingleDistrict[];
  export default pyStreet;
}
