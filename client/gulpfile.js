var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
//var refresh = require('gulp-livereload');
//var lr = require('tiny-lr');
//var server = lr();

gulp.task('scripts', function() {
    gulp.src(['./app/scripts/*.js'])
        .pipe(browserify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./build/'))
        //.pipe(refresh(server))
})

// gulp.task('lr-server', function() {
//     server.listen(35729, function(err) {
//         if(err) return console.log(err);
//     });
// })

gulp.task('sass', function () {
  return gulp.src('./app/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
});

gulp.task('default', function() {

  var client = ['sass', 'scripts'];

  gulp.start('sass', 'scripts' );

  gulp.watch('app/**', client);
})
