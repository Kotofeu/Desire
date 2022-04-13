export const ico = () => {
   return app.gulp.src(app.path.src.images)
      .pipe(app.gulp.src(app.path.src.ico))
      .pipe(app.gulp.dest(app.path.build.images))
      .pipe(app.plugins.browsersync.stream());
}