export type SingleDistrict = {
  adcode: string;
  name: string;
  py: string;
}

export type CascadeDistrict = SingleDistrict & {
  districts: SingleDistrict[];
}