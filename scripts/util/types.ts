import { CompilerOptions } from 'typescript';
import { AngularCompilerOptions } from '@angular/tsc-wrapped';

export interface GlobalLibConfig {
  scope?: string;
  packages: string[]
}

export interface LocalLibConfig {

  /**
   * The entry file name, without extension.
   * defaults to 'index' if not set.
   *
   * Use in multi-library configuration to avoid AOT compilation hell with 'index' addition
   */
  entry?: string;

  /**
   * When true, all javascript files (TS output) with Angular components that has a URI template resources
   * (templateUrl with HTML and styleUrls with css, scss) will get be inlined.
   *
   * i.e. "templateUrl" will get replaced with "template" and "styleUrls" with "styles".
   *
   * This is similar to what "angular2-template-loader" does but instead of a require reference, it will be the raw template.
   *
   * Each resource will go through webpack's loader chain, this means you can use scss and it will get processed.
   * Any loader you put in the chain will work so you can achieve complex things.
   *
   * ADDITIONALLY, all of angular's "metadata.json" files will go through the same process
   * inlining the resources into them.
   *
   * > The end result after compilation is 100% similar to result in dev mode,
   * as long as the loaders and their order are identical in both configurations.
   *
   * > Setting "inlineResources" to true will activate template code generation by the angular compiler (skipTemplateCodegen=false)
   * Template code generation is turned off by default so make sure to active "inlineResources" if you are
   * using "templateUrl" / "styleUrls" in your library components.
   */
  inlineResources?: boolean;

  /**
   * Internal extensions for the library.
   * If a library declares a "libExtensions" property in it's internal package.json file
   * it is considered as instructions for creating internal umd bundles.
   *
   * THIS OBJECT IS SUBJECT TO CHANGE.
   * Most probably it will be an array of string where metadata for each extension
   * will be set inside it's package.json and not in the parent.
   */
  libExtensions?: Array<LibraryExtension>;
}

export interface PackageMetadata {
  name: string;

  /**
   * The directory name, with scope (if exists)
   *
   * For example, if the directory name is "lib" and the scope is "corp" dir will be "@corp/lib"
   *
   * When no scope dir === dirName
   */
  dir: string;

  /**
   * The directory name, without scope
   *
   * When no scope dir === dirName
   */
  dirName: string;

  umd: string;

  /**
   * A list of the names of external dependencies (based on package.json)
   */
  externals: string[],

  /**
   * A list of regexp of external dependencies (based on package.json)
   */
  externalsWebpack: Array<RegExp | string>;

  /**
   * The exported module name for UMD bundles
   *
   * The default is a camel case version of the name.
   * When a scope is set it is prefixed without the @ sign and separated by a dot.
   *
   * Examples:
   * my-library: myLibrary
   * @company/my-library: company.myLibrary
   */
  moduleName: string;

  /**
   * The entry file name, without extension.
   * 'index' if not set.
   *
   * Use in multi-library configuration to avoid AOT compilation hell with 'index' addition
   */
  entry: string;

  inlineResources: boolean;

  tsConfig: string;
  tsConfigObj: { compilerOptions: CompilerOptions, angularCompilerOptions: AngularCompilerOptions };

  /**
   * Internal extensions for the library.
   * If a library declares a "libExtensions" property in it's internal package.json file
   * it is considered as instructions for creating internal umd bundles.
   */
  libExtensions?: Array<LibraryExtension>;

  parent?: PackageMetadata;
  extension?: LibraryExtension;
}

export interface LibraryExtension {
  /**
   * The name of the library
   */
  name: string;

  /**
   * The relative path to the DIRECTORY of the extension.
   * Relative to the root directory of the current package.
   *
   * Optional, if not set taken from the name property.
   */
  dir?: string;

  /**
   * The entry file, relative to the 'dir' property.
   *
   * Optional, if not set `index.ts` is used
   */
  entry?: string;
}


export interface CommitVersion {
  commit: string;
  version: string;
}