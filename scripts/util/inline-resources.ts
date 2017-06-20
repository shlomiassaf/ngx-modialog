// taken from https://github.com/angular/material2/blob/master/tools/gulp/packaging/inline-resources.ts
/* tslint:disable:no-eval */

import {dirname, join} from 'path';
import {readFileSync, writeFileSync} from 'fs';
import {sync as glob} from 'glob';
import * as del from 'del';

/** Finds all JavaScript files in a directory and inlines all resources of Angular components. */
export function inlineResourcesForDirectory(folderPath: string, deleteResource: boolean = false) {
  glob(join(folderPath, '**/*.js')).forEach(filePath => inlineResources(filePath, deleteResource));
}

/** Inlines the external resources of Angular components of a file. */
export function inlineResources(filePath: string, deleteResource: boolean = false) {
  let fileContent = readFileSync(filePath, 'utf-8');

  fileContent = inlineTemplate(fileContent, filePath, deleteResource);
  fileContent = inlineStyles(fileContent, filePath, deleteResource);
  fileContent = removeModuleId(fileContent);

  writeFileSync(filePath, fileContent, 'utf-8');
}

/** Inlines the templates of Angular components for a specified source file. */
function inlineTemplate(fileContent: string, filePath: string, deleteResource: boolean = false) {
  return fileContent.replace(/templateUrl:\s*'([^']+?\.html)'/g, (_match, templateUrl) => {
    const templatePath = join(dirname(filePath), templateUrl);
    const templateContent = loadResourceFile(templatePath);

    if (deleteResource === true) {
      del.sync(templatePath);
    }

    return `template: "${templateContent}"`;
  });
}

/** Inlines the external styles of Angular components for a specified source file. */
function inlineStyles(fileContent: string, filePath: string, deleteResource: boolean = false) {
  return fileContent.replace(/styleUrls:\s*(\[[\s\S]*?])/gm, (_match, styleUrlsValue) => {
    // The RegExp matches the array of external style files. This is a string right now and
    // can to be parsed using the `eval` method. The value looks like "['AAA.css', 'BBB.css']"
    const styleUrls = eval(styleUrlsValue) as string[];

    const styleContents = styleUrls
      .map(url => join(dirname(filePath), url))
      .map(path => {
        const styleContent = loadResourceFile(path);
        if (deleteResource === true) {
          del.sync(path);
        }
        return styleContent;
      });

    return `styles: ["${styleContents.join(' ')}"]`;
  });
}

/** Remove every mention of `moduleId: module.id` */
function removeModuleId(fileContent: string) {
  return fileContent.replace(/\s*moduleId:\s*module\.id\s*,?\s*/gm, '');
}

/** Loads the specified resource file and drops line-breaks of the content. */
function loadResourceFile(filePath: string): string {
  return readFileSync(filePath, 'utf-8')
    .replace(/([\n\r]\s*)+/gm, ' ')
    .replace(/"/g, '\\"');
}