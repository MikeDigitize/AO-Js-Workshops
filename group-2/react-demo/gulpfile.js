var gulp = require("gulp");
var sass = require("gulp-sass");
var minimise = require("gulp-cssnano");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");
var webpack = require("webpack-stream");
var sassSource = "./src/scss/bootstrap4/bootstrap-custom.scss";
var stylesDest = "./build/css";

var jsSource = "./src/js/app.js";
var jsDest = "./build/js";

var htmlSource = "./src/*.html";
var htmlDest = "./build";

gulp.task("js", () => {
    return gulp.src(jsSource)
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest(jsDest));
});

gulp.task("styles", () => {
    return gulp.src(sassSource)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(minimise())
        .pipe(concat("bootstrap4.min.css"))
        .pipe(gulp.dest(stylesDest));
});

gulp.task("html", () => {
    return gulp.src(htmlSource)
        .pipe(gulp.dest(htmlDest));
});

gulp.task("watch", function() {
    gulp.watch(sassSource, ["styles"]);
    gulp.watch(htmlSource, ["html"]);
    gulp.watch(jsSource, ["js"]);
});

gulp.task("default", ["styles", "html", "js", "watch"]);