import * as util from '../util';

const detect = () => {
  const needBump = util.detectVersionBump();
  if (Object.keys(needBump).length > 0) {
    util.log('The following packages need a bump: \n' + JSON.stringify(needBump, null, 2));
  } else {
    util.log('No bump needed, can publish.');
  }
};

@util.GulpClass.Gulpclass()
export class Gulpfile {

  @util.GulpClass.Task({
    name: 'release:detect',
    desc: 'Detects which library requires a new version based on the last commit version checkpoint'
  })
  releaseDetect() {
    detect();
  }

  @util.GulpClass.Task({
    name: 'release:commit',
    desc: 'Save the git commit hash for every library. This task should run after a release to mark the last checkpoint then use "release:detect" to find out which library requires a new release.'
  })
  releaseCommit() {
    detect();
    util.commitVersionBump();
  }
}