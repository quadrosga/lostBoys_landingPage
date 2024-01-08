// Importando os plugins 
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Configurando as funções 
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

// Exportando as tarefas 
exports.default = styles;

// Exportando watch justo da definição da função 
exports.watch = function() {
    gulp.watch('./src/styles/*.scss'), gulp.parallel(styles)
}