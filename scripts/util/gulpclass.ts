import * as gulpclass from 'gulpclass';

export namespace GulpClass {
  export interface TaskMetadataArgs {
    name?: string;
    desc?: string;
    dependencies?: string[];
  }

  export const Gulpclass = gulpclass.Gulpclass;

  export function Task(metaArgs?: TaskMetadataArgs | string): Function {
    const args = parseMetaArgs(metaArgs);
    return gulpclass.Task(args.name, args.dependencies);
  }

  export function SequenceTask(metaArgs?: TaskMetadataArgs | string): Function {
    const args = parseMetaArgs(metaArgs);
    return gulpclass.SequenceTask(args.name);
  }

  export function MergedTask(metaArgs?: TaskMetadataArgs | string): Function {
    const args = parseMetaArgs(metaArgs);
    return gulpclass.MergedTask(args.name);
  }

  function parseMetaArgs(metaArgs?: TaskMetadataArgs | string): TaskMetadataArgs {
    if (typeof metaArgs === 'string') {
      return { name: metaArgs };
    } else if (!metaArgs) {
      return {}
    } else {
      return metaArgs;
    }
  }
}

