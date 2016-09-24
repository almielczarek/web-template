var gulp = require("gulp"),
    pug = require("gulp-pug"),
    stylus = require("gulp-stylus")

gulp.task("pug", () => {
  return gulp.src("src/pug/*.pug")
             .pipe(pug())
             .pipe(gulp.dest("public"))
})

gulp.task("stylus", () => {
  return gulp.src("src/stylus/*.styl")
             .pipe(stylus({
               compress: true
             }))
             .pipe(gulp.dest("public/css"))
})

gulp.task("default", () => {
  gulp.watch("src/pug/**/*.pug", ["pug"])
  gulp.watch("src/stylus/**/*.styl", ["stylus"])
})
