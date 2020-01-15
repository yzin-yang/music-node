const { series, src, dest } = require('gulp');
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function clean() {
  return src(['./dist/*.js', './dist/*.json', './dist/**/*.ts'], {
    read: false
  }).pipe(clean());
}

function dev(cb) {
  // body omitted
  cb();
}

exports.default = series(clean, dev);
