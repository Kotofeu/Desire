import webpack from "webpack-stream";
import minify from "gulp-minify";
import rename from 'gulp-rename';
import jscelan from "gulp-strip-comments";
export const js = () => {
   return app.gulp.src(app.path.src.js, {sourcemaps: true})
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
         }))
      )
      /*.pipe(webpack({
         mode: 'development',
         output: {
            filename: 'app.min.js',
         }
      }))*/
      .pipe(rename({
         extname: ".min.js"
      }))
      .pipe(minify({
         ext:{
             src:'-debug.js',
             min:'.js'
         },
         exclude: ['tasks'],
         ignoreFiles: ['.combo.js', '-min.js']
     }))
      .pipe(jscelan())
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream());
}