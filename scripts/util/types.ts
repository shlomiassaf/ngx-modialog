import { CompilerOptions } from 'typescript';
import { AngularCompilerOptions } from '@angular/compiler-cli';

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

  tsConfig: string;
  tsConfigObj: { compilerOptions: CompilerOptions, angularCompilerOptions: AngularCompilerOptions, files: string[] };

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
