import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import {plugins} from "./gulp/config/plugins.js"

global.app = {
   path: path,
   gulp: gulp,
   plugins: plugins
}

import { copy } from './gulp/tasks/copy.js'
import { reset,  resetAll} from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { ico } from './gulp/tasks/ico.js'
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js'
import { svgSprive } from './gulp/tasks/svgSprive.js'
import { zip } from './gulp/tasks/zip.js'
// !Наблюдатель
function watcher(){
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html);
   gulp.watch(path.watch.scss, scss); 
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.images, images);
   gulp.watch(path.watch.ico, ico);
}
export { svgSprive }
const fonts = gulp.series(otfToTtf, ttfToWoff, fontStyle)
// Основные задачи
const mainTasks = gulp.series(gulp.parallel(copy, html, scss, js, images, ico))
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const createzip = gulp.series(resetAll,fonts, svgSprive, mainTasks,  zip)
const delet = gulp.series(resetAll)
export {createzip}
export {delet}
export {fonts}

gulp.task('default', dev);
