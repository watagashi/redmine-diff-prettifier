const gulp = require('gulp');
const del = require('del');
const pump = require('pump');

gulp.task('clean', () => {
  return del(['./build', './dist']);
});

gulp.task('crx', ['build', 'copy'], cb => {
  const crx = require('gulp-crx-pack');
  const fs = require('fs');
  const manifest = require('./extension-src/manifest.json');

  del(['./dist']).then(() =>
    pump(
      [
        gulp.src('./build'),
        crx({
          privateKey: fs.readFileSync('./certs/key.pem', 'utf8'),
          filename: manifest.name + '.crx'
        }),
        gulp.dest('./dist')
      ],
      cb
    )
  );
});

gulp.task('build', cb => {
  const babel = require('gulp-babel');

  pump(
    [
      gulp.src('./extension-src/*.js'),
      babel({
        presets: ['env', 'minify'],
        ignore: ['**/*.min.js']
      }),
      gulp.dest('./build')
    ],
    cb
  );
});

gulp.task('copy', cb => {
  pump(
    [
      gulp.src([
        './extension-src/manifest.json',
        './node_modules/jquery/dist/jquery.slim.min.js'
      ]),
      gulp.dest('./build')
    ],
    cb
  );
});

gulp.task('default', ['crx']);
