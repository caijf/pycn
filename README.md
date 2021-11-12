# pycn

中国行政区域（省/市/区/街道）拼音，导出 `umd` 格式，支持 node/es6/浏览器使用。

数据来源：[高德地图-行政区域查询]

## 数据格式

```typescript
// 单个数据
type SingleDistrict = {
  adcode: string;
  name: string;
  py: string;
};

// 级联数据
type CascadeDistrict = SingleDistrict & {
  districts?: SingleDistrict[];
};
```

| 文件模块                     | 数据类型            | 描述          |
| ---------------------------- | ------------------- | ------------- |
| py-data.js                   | `CascadeDistrict[]` | 省/市/区/街道 |
| py-province-city-district.js | `CascadeDistrict[]` | 省/市/区      |
| py-province-city.js          | `CascadeDistrict[]` | 省/市         |
| py-province.js               | `SingleDistrict[]`  | 省            |
| py-city.js                   | `SingleDistrict[]`  | 市            |
| py-district.js               | `SingleDistrict[]`  | 区            |
| py-street.js                 | `SingleDistrict[]`  | 街道          |

## 安装

- node/es

```bash
npm install pycn
```

- 浏览器

html 直接引入 [unpkg](https://unpkg.com/browse/pycn@latest/lib/) 对应的文件，注意不同模块对应不同的全局变量，如 `py-city.js` 全局变量为 `pyCity`。

## 使用

所有文件模块都存放在 `lib/` 文件夹下，通过模块引入不同文件使用不同数据。

_注意：尽量只使用其中一个数据，否则会使项目构建体积变大。_

```typescript
// 省/市/区/街道
import pyData from 'pycn/lib/py-data';

// 省/市/区
import pyProvinceCityDistrict from 'pycn/lib/py-province-city-district';

// 省/市
import pyProvinceCity from 'pycn/lib/py-province-city';

// 省
import pyProvince from 'pycn/lib/py-province';

// 市
import pyCity from 'pycn/lib/py-city';

// 区
import pyDistrict from 'pycn/lib/py-district';

// 街道
import pyStreet from 'pycn/lib/py-street';
```

## 参考

- [高德地图-行政区域查询]

[高德地图-行政区域查询]: https://lbs.amap.com/api/webservice/guide/api/district/
