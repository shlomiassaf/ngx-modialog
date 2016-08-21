const transform = require('gulp-transform-js-ast');
const rename = require('gulp-es6-imports-renamer');
const replace = require('gulp-replace');

const CORE_PACKAGE_NAME = 'angular2-modal';
const CORE_IMPORT_REGEX = /^(.*\.\.?\/components\/angular2-modal)(.*)$/;


function renameFn(originalPath, parentPath, callback) {
  var match = CORE_IMPORT_REGEX.exec(originalPath);
  if ( match !== null) {
    callback(null, originalPath.replace(CORE_IMPORT_REGEX, `${CORE_PACKAGE_NAME}$2`));
  } else {
    callback(null, originalPath);
  }
}

const visitCallExpression = (function() {
  function isRequireMethod (path) {
    var node = path.value;

    return node.type === 'CallExpression' &&
      node.callee &&
      node.callee.type === 'Identifier' &&
      node.callee.name === 'require';
  }

  function isLiteral(path) {
    var args = path.value.arguments;
    return args &&
      args.length === 1 &&
      args[0].type === 'Literal';
  }

  function isCandidate(path) {
    return isRequireMethod(path) && isLiteral(path);
  }

  return function visitCallExpression(path) {
    if (isCandidate(path)) {
      var match,
        arg = path.value.arguments["0"];
      if ((match = CORE_IMPORT_REGEX.exec(arg.value)) !== null) {
        arg.value = arg.value.replace(CORE_IMPORT_REGEX, `${CORE_PACKAGE_NAME}$2`);
      }
    }
    return path.value;
  }
})();


function tsDefinitionImportRename() {
  const CORE_IMPORT_REGEX = /^(import {.+} from ['"])(.*\/components\/angular2-modal)(['"];?)$/m;
  return replace(CORE_IMPORT_REGEX, `$1${CORE_PACKAGE_NAME}$3`);
}

module.exports.tsDefinitionImportRename = tsDefinitionImportRename();
module.exports.es6ImportRename = rename({renameFn: renameFn});
module.exports.es5RequireVisitor = transform( { visitCallExpression: visitCallExpression } );
