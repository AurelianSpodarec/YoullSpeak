//
//  Table of content
//  
//  1. Included taskes
//  2. Conf Variables - Set Path
//  3. Styles - APP Tasks
//  4. HTML Tasks
//  5. Bower-Syn Tasks
//  6. Build Task
//  7. Watch Tasks
//  8. Move jQuery from bower to src
//  9. Gulps default task
//



// Included taskes
// // /////////////////////////////////////////////

var gulp            = require('gulp'),
    minifycss       = require('gulp-minify-css'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    autoprefixer    = require('gulp-autoprefixer'),
    plumber         = require('gulp-plumber'),
    del             = require('del'),
    rename          = require('gulp-rename'),
    sourcemaps      = require('gulp-sourcemaps');



// Configuration variables
// Set paths
// // /////////////////////////////////////////////

var config = {
                scss    :[ 'src/scss/**/*.scss' ],
                css     :[ 'src/css/' ],
                html    :[ 'src/**/*.html' ],
                build   :[ '.' ],
                src     :[ 'src/' ]
            };



// Styles / Sass Tasks
// // /////////////////////////////////////////////

gulp.task('app',function(){

 return gulp.src(config.scss)
            .pipe(sourcemaps.init())
            .pipe(sass()
            .on('error', sass.logError))
            .pipe(autoprefixer('last 3 versions'))
            .pipe(minifycss())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(''+config.css+''))
            .pipe(reload({stream:true}));

});



// HTML Tasks
// // /////////////////////////////////////////////

gulp.task('html', function(){
    return gulp.src(config.html)
               .pipe(reload({stream:true}));
});



// Browser-Sync Tasks
// // /////////////////////////////////////////////

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: config.src
        }
    });
});



// Build Tasks
// Create build, clean un-neccesary files and folders
// // /////////////////////////////////////////////

gulp.task('build:create', function(){
    return gulp.src(config.src+'**/*')
               .pipe(gulp.dest(''+config.build+''));
});

gulp.task('build:clean',['build:create'], function(){
    return del(['build/bower_components/',
                'build/scss/',
                'build/css/!(*.min.css)',
                'build/js/!(*.min.js)'
              ]);
});

gulp.task('build:start', function() {
    browserSync({
        server: {
            baseDir: config.build
        }
    });
});

gulp.task('build:delete', function(res){
    return del([config.build+'/**'], res);
});

 gulp.task('build', ['build:create', 'build:clean']);



// Watch Tasks
// Watch any changes of the css, scripts, and html
// // /////////////////////////////////////////////

gulp.task ('watch', function(){

  gulp.watch(config.scss, ['app']);

  gulp.watch(config.html, ['html']);


});



// Move jQuery
// // /////////////////////////////////////////////
gulp.task('jquery', function() {
    return gulp.src('bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('src/js'));
});

 

// ////////////////////////////////////////////////
// Gulp Default task
// ////////////////////////////////////////////////
gulp.task('default', ['watch', 'jquery', 'browserSync','app','html']);