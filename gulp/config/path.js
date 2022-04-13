import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const scrFolder = `./src`

export const path = {
   build: {
      js: `${buildFolder}/js/`,
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      images: `${buildFolder}/images/`,
      fonts: `${buildFolder}/fonts/`,
      files: `${buildFolder}/files/`,
    },
   src:{
      images: `${scrFolder}/img/**/*.{png,jpg,jpeg,gif,webp}`,
      svg: `${scrFolder}/img/**/*.svg`,
      ico: `${scrFolder}/img/**/*.ico`,
      js: `${scrFolder}/js/app.js`,
      scss: `${scrFolder}/scss/style.scss`,
      html: `${scrFolder}/*.html`,
      files: `${scrFolder}/files/**/*.*`,
      svgicons: `${scrFolder}/svgicons/*.svg`,

   },
   watch: {
      images: `${scrFolder}/img/**/*.{png,jpg,jpeg,gif,webp,svg}`,
      ico: `${scrFolder}/img/**/*.ico`,
      js: `${scrFolder}/js/**/*.js`,
      scss: `${scrFolder}/scss/**/*.scss`,
      html: `${scrFolder}/**/*.html`,
      files: `${scrFolder}/files/**/*.*` 
   },
   clean: {
      js: `${buildFolder}/js`,
      css: `${buildFolder}/css`,
      html: `${buildFolder}/*.html`,
      files: `${buildFolder}/files`,
    },
   cleanAll: buildFolder,
   buildFolder: buildFolder,
   scrFolder: scrFolder,
   rootFolder: rootFolder,
}