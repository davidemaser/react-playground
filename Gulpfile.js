/**
 * Created by DAVIM on 13/04/2017.
 */
let gulp = require('gulp');
let sass = require('gulp-sass');
let jsdoc = require('gulp-jsdoc3');

let input = './stylesheets/**/*.scss';
let output = './public/css';

let sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

gulp.task('sass', () => {
    return gulp
    // Find all `.scss` files from the `stylesheets/` folder
        .src(input)
        // Run Sass on those files
        .pipe(sass())
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(output));
});

gulp.task('doc',(cb) => {
    gulp.src(['./src/**/*.js','./src/components/**/*.js','./src/widgets/**/*.js'], {read: false})
        .pipe(jsdoc(cb));
});

gulp.task('watch', () => {
    return gulp
        .watch(input,['sass'])
        .on('change', (event) => {
            console.log('file '+event.path)
        })
});

gulp.task('default', ['sass','watch']);