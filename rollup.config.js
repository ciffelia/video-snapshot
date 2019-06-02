import packageJson from './package.json'

const banner = `
// ==UserScript==
// @name         video-snapshot
// @namespace    https://ciffelia.com/
// @version      ${packageJson.version}
// @description  ${packageJson.description}
// @author       ${packageJson.author}
// @license      ${packageJson.license}
// @homepage     ${packageJson.homepage}
// @supportURL   ${packageJson.bugs}
// @include      *
// @grant        GM_registerMenuCommand
// @run-at       document-idle
// ==/UserScript==
`.trim() + '\n'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    banner
  }
}
