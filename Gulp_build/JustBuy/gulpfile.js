/* Imports */
const { src, dest, parallel, series, watch } = require('gulp');

const browserSync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const uglify       = require('gulp-uglify-es').default;
const scss 		   = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleancss     = require('gulp-clean-css');
const imagecomp    = require('compress-images');
const clean 	   = require('gulp-clean');
const flatmap 	   = require('gulp-flatmap');
const path 		   = require('path');
const order 	   = require('gulp-order');
const strip 	   = require('gulp-strip-comments');
const flatten 	   = require('gulp-flatten');
const ignore 	   = require('gulp-ignore');
const panini	   = require('panini');
const changed 	   = require('gulp-changed');
// const newer 	   = require('gulp-newer');


// Сборка html
const srcPath = 'src';

const paniniOptions = {
    root: srcPath + '/pages/', 
    layouts: srcPath + '/templates/layouts/', 
    partials: srcPath + '/templates/partials/',
	helpers: srcPath + '/templates/helpers',
};

var globalData = {
	title: 'Default page',
	css: '<link rel="stylesheet" href="default styles">',
	js: '<script src="default scripts'
  };


// Сбор html
function build_template() {
panini.refresh()
return src(srcPath + '/pages/**/*.html')
	.pipe(panini(paniniOptions, {data: globalData}))
	.pipe(dest('src/'))
	.pipe(browserSync.reload({stream: true}));
};


/* Tasks */
function browsersync() {
	browserSync.init({ // Инициализация Browsersync
		server: { baseDir: 'src' }, // Указываем папку сервера
		notify: false, // Отключаем уведомления
		online: true // Режим работы: true или false
	})
}


// Обработка скриптов для сборки
function scripts() {
  return src('src/js/src/*.js')
    .pipe(flatmap(function(stream, file) {
      return src(['node_modules/jquery/dist/jquery.min.js', file.path, 'src/js/src/general/*.js'])
        .pipe(order([
          'node_modules/jquery/dist/jquery.min.js',
		  'src/js/src/general/*.js',
          file.path
        ], { base: './' }))
        .pipe(concat(path.basename(file.path).replace('.js', '.min.js')))
        .pipe(uglify())
		.pipe(strip())
        .pipe(dest(function(file) {
          return path.join('src/js/dist', path.dirname(file.path).substring(file.base.length));
        }))
        .pipe(browserSync.stream());
    }));
}


// Обработка скриптов для отслеживание
function watch_scripts() {
	return src('src/js/src/*.js')
	  .pipe(changed('src/js/dist', { extension: '.min.js' }))
	  .pipe(flatmap(function(stream, file) {
		return src(['node_modules/jquery/dist/jquery.min.js', file.path, 'src/js/src/general/*.js'])
			.pipe(order([
			'node_modules/jquery/dist/jquery.min.js',
			'src/js/src/general/*.js',
			file.path
		  ], { base: './' }))
		  .pipe(concat(path.basename(file.path).replace('.js', '.min.js')))
		  .pipe(uglify())
		  .pipe(strip())
		  .pipe(dest(function(file) {
			return path.join('src/js/dist', path.dirname(file.path).substring(file.base.length));
		  }))
		  .pipe(browserSync.stream());
	  }));
  }


function raw_scripts() {
	return src('src/js/src/*.js')
	  .pipe(flatmap(function(stream, file) {
		return src(['node_modules/jquery/dist/jquery.min.js', file.path, 'src/js/src/general/*.js'])
		  .pipe(order([
			'node_modules/jquery/dist/jquery.min.js',
			'src/js/src/general/*.js',
			file.path,
			
		  ], { base: './' }))
		  .pipe(concat(path.basename(file.path).replace('.js', '.min.js')))
		  .pipe(dest(function(file) {
			return path.join('src/js/dist', path.dirname(file.path).substring(file.base.length));
		  }))
		  .pipe(browserSync.stream());
	  }));
  }


// Очистка папки для styles
function clean_css() {
	return src('src/css', {read: false, allowEmpty: true})
	  .pipe(clean());
  }


// Обработка стилей для отслеживания
function watch_styles() {
	return src(['src/scss/styles/**/*.scss', '!src/scss/styles/*/blocks/*.scss', '!src/scss/_variables.scss'])
	  .pipe(flatmap(function(stream, file) {
		return src([
		  'src/scss/_variables.scss',
		  'src/scss/general_scss/*.scss',
		  'src/scss/vendors/*',
		  file.path,
		])
		.pipe(ignore.exclude('**/blocks/**')) 
		.pipe(ignore.exclude('**/variables.scss/**')) 
		.pipe(scss())
		.pipe(concat(path.basename(file.path).replace('.scss', '.min.css')))
		.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
		.pipe(cleancss({ level: { 1: { specialComments: 0 } }}))
		.pipe(dest(function(file) {
		  return path.join('src/css', path.dirname(file.path).substring(file.base.length));
		}))
		.pipe(browserSync.stream());
	  }));
}




function styles() {
	return src(['src/scss/styles/**/*.scss', '!src/scss/styles/*/blocks/*.scss', '!src/scss/_variables.scss'])
		.pipe(ignore.exclude('**/blocks/**')) 
		.pipe(ignore.exclude('**/variables.scss/**')) 
		.pipe(flatmap(function(stream, file) {
		return src(['src/scss/_variables.scss',
			'src/scss/general_scss/*.scss',
			'src/scss/vendors/*',
			file.path,
			])
			.pipe(scss())
			.pipe(concat(path.basename(file.path).replace('.scss', '.min.css')))
			.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
			.pipe(cleancss( { level: { 1: { specialComments: 0 } }}))
			.pipe(dest(function(file) {
			return path.join('src/css', path.dirname(file.path).substring(file.base.length));
			}))
			.pipe(browserSync.stream());
		}));
}



function raw_styles() {
	return src(['src/scss/styles/**/*.scss', '!src/scss/styles/*/blocks/*.scss', '!src/scss/_variables.scss'])
		.pipe(ignore.exclude('**/blocks/**')) 
		.pipe(ignore.exclude('**/variables.scss/**')) 
		.pipe(flatmap(function(stream, file) {
		return src(['src/scss/_variables.scss',
			'src/scss/general_scss/*.scss',
			'src/scss/vendors/*',
			file.path,
			])
			.pipe(scss())
			.pipe(concat(path.basename(file.path).replace('.scss', '.min.css')))
			.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
			.pipe(dest(function(file) {
			return path.join('src/css', path.dirname(file.path).substring(file.base.length));
			}))
			.pipe(browserSync.stream());
		}));
}




// Очистка изображений
function cleanimg() {
	return src('src/images/dest/', {allowEmpty: true}).pipe(clean())
}

async function images() {
	imagecomp(
		"src/images/src/**/*", 
		"src/images/dest/",
		{ compress_force: false, statistic: true, autoupdate: true }, false,
		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, 
		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) { 
			if (completed === true) {
				browserSync.reload()
			}
		}
	)
}

// Очистка иконок
function cleanico() {
	return src('src/icons/dest/', {allowEmpty: true}).pipe(clean())
}


async function icons() {
	imagecomp(
		"src/icons/src/**/*", 
		"src/icons/dest/",
		{ compress_force: false, statistic: true, autoupdate: true }, false,
		{ jpg: { engine: "mozjpeg", command: ["-quality", "75"] } }, 
		{ png: { engine: "pngquant", command: ["--quality=75-100", "-o"] } },
		{ svg: { engine: "svgo", command: "--multipass" } },
		{ gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
		function (err, completed) { 
			if (completed === true) {
				browserSync.reload()
			}
		}
	)
}


// Слежка за изменениями
function startwatch() {
	watch('src/js/src/**/*.js', watch_scripts);
    watch('src/scss/**/*.scss', watch_styles);
    watch(['src/pages/*.html', 'src/templates/**/*.html'], build_template);
    watch('src/images/src/**/*', images);
    watch('src/icons/src/**/*', icons);
}


function buildcopy() {
	build_template();
	return src([ // Выбираем нужные файлы
		'src/css/**/*.min.css',
		'src/js/**/*.js',
		'src/images/dest/**/*',
		'src/icons/dest/**/*',
		'src/*.html',
		], { base: 'src' })
	.pipe(dest('dist')) 
}

function raw_buildcopy() {
	build_template();
	return src([ 
		'src/css/**/*min.css',
		'src/js/dist/*.js',
		'src/images/dest/**/*',
		'src/icons/dest/**/*',
		'src/*.html',
		], { base: 'src' })
	.pipe(dest('dist')) 
}



function clean_raw_js() {
	return src(['src/js/dist/*.js', '!src/js/dist/*.min.js'], {allowEmpty: true}).pipe(clean())
}


function cleandist() {
	return src('dist', {allowEmpty: true}).pipe(clean()) // Удаляем папку "dist/"
}





/* Exports */
exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;

exports.images      = images;
exports.icons       = icons;

exports.cleanimg    = cleanimg;
exports.cleanico    = cleanico;

exports.build_template = build_template;

exports.raw_build   = series(cleandist, raw_styles, raw_scripts, images, icons, build_template, raw_buildcopy, clean_raw_js); 
exports.build       = series(cleandist, styles, scripts, images, icons, build_template, buildcopy); 
exports.default     = parallel(styles, scripts, build_template, browsersync, startwatch);