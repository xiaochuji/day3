var gulp = require('gulp');
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var clean = require("gulp-cleancss");

gulp.task("sass",function(){
    return gulp.src("./src/css/*.scss")
           .pipe(sass())
           .pipe(gulp.dest("./src/css"))
})

gulp.task('concatCss',function(){
    return gulp.src("./src/css/*.css")
           .pipe(concat("index.css"))
           .pipe(clean())
           .pipe(gulp.dest("./src/css/"))
})

gulp.task("watch",function(){
    gulp.watch("./src/css/*.scss",gulp.series("sass","concatCss"))
})

gulp.task("default",gulp.series("sass","concatCss","watch"))