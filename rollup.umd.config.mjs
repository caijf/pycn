import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';
import { umdDir, input, plugins } from './rollup.base.config.mjs';

function toCamel(str) {
  const chunks = str.split('-').map((item, i) => {
    if (i !== 0) {
      return item[0].toUpperCase() + item.substring(1);
    }
    return item;
  });
  return chunks.join('');
}

export default defineConfig(input.map(item => {
  const paths = item.split('/');
  const fileName = paths[paths.length - 1].split('.')[0];
  const globalName = toCamel(fileName);

  return {
    input: item,
    output: [
      {
        format: 'umd',
        file: `${umdDir}/${fileName}.js`,
        name: globalName
      }
    ],
    plugins: [
      ...plugins,
      terser()
    ]
  }
}));
