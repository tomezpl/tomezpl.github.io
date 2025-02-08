import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import {browserslistToTargets} from "lightningcss";
import browserslist from "browserslist";

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
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 1%')),
      cssModules: true,
      // @ts-ignore
      sourceMap: process.env.NODE_ENV !== 'production',
    }
  },
  build: {
    cssMinify: 'lightningcss'
  }
})
