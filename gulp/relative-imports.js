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



function tsDefinitionImportRename() {
  const CORE_IMPORT_REGEX = /^(import|export)( \{.+\} from ['"])(.*\/components\/angular2-modal)(['"];?)$/mg;
  return replace(CORE_IMPORT_REGEX, `$1$2${CORE_PACKAGE_NAME}$4`);
}

function ngcMetadataRename() {
  const CORE_IMPORT_REGEX = /(\.\..*?\/components\/angular2-modal)/g;
  return replace(CORE_IMPORT_REGEX, `${CORE_PACKAGE_NAME}`);
}

module.exports.tsDefinitionImportRename = tsDefinitionImportRename();
module.exports.ngcMetadataRename = ngcMetadataRename();
module.exports.es6ImportRename = rename({renameFn: renameFn});
