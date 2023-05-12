import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { globSync } from 'glob';

export const umdDir = `umd`;
export const esmDir = `es`;
export const cjsDir = `cjs`;
export const input = globSync('src/**/*.ts');
export const plugins = [
  resolve(),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.build.json"
  })
];
