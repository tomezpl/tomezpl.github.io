import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import {browserslistToTargets} from "lightningcss";
import browserslist from "browserslist";
import {resolve} from 'node:path';
import pkg from './package.json';

// @ts-ignore
console.log(process.env.NODE_ENV)

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true
      },
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src')
    }
  },
  css: {
    // transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 1%')),
      cssModules: true,
      // @ts-ignore
      sourceMap: process.env.NODE_ENV !== 'production',

    }
  },
  build: {
    // This is needed for accessing the site with JS disabled, otherwise the CSS doesn't get loaded
    cssCodeSplit: false
    // cssMinify: 'lightningcss'
  },
  define: {
    VERSION: JSON.stringify(pkg.version),
  }
})
