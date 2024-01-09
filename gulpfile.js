// Importando os plugins 
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Configurando as funções
    // como essas funções executam alterações em arquivos do src e enviam os resultados para dist, 
    // elas recebem os métodos gulp.src e gulp.dest e os respectivos caminhos 
function scripts() {
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

// Exportando as tarefas default
exports.default = gulp.parallel(styles, images, scripts);
    // adicionar styles, images à default garante que essas tarefas são executadas ao rodar a tarefa default 

// Exportando watch justo da definição da função 
    // o watch deve observar alterações no arquivo scss (1. argumento),
    // e rodar styles em paralelo quando houver mudança (2. argumento) 
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts));
}