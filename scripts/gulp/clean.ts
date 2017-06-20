import * as gulp from 'gulp';
import * as del from 'del';

import * as util from '../util';

gulp.task('!clean:dist', () => {
  return del([util.root(util.FS_REF.PKG_DIST), util.root(util.FS_REF.NG_COMPILE)]);
});