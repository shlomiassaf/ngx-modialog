const exec = require('child_process').exec;
const ANGULAR_VERSION = '2.0.0-rc.4';

const ANGULAR_PACKAGES = [
    "core",
    "compiler",
    "common",
    "platform-browser",
    "platform-browser-dynamic"
];

const POST_PACKAGES = [
    "@angular/router@3.0.0-beta.2"
];


function completerFactory() {
    const completer = {
        promise: undefined,
        resolve: undefined,
        reject: undefined
    };

    completer.promise = new Promise((res, rej) => {
        completer.resolve = res;
        completer.reject = rej;
    });

    return completer;
}

function getAngularPackages() {
    return ANGULAR_PACKAGES.map( p => `@angular/${p}@${ANGULAR_VERSION}`);
}

function exeCmd(cmd) {
    var completer = completerFactory();

    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            completer.reject(error);
        } else {
            completer.resolve({
                stdout: stdout,
                stderr: stderr
            });
        }
    });

    return completer.promise;
}

function deleteAngularModules() {
    return exeCmd(`rm -rf ./node_modules/@angular`);
}

function installAngular() {
    return exeCmd(`npm install ${getAngularPackages().join(' ')}`);
}

function installPost() {
    return exeCmd(`npm install ${POST_PACKAGES.join(' ')}`);
}

function print(msg) {
    msg && console.log(msg);
}

function printStd(std) {
    print(std.stdout);
    print(std.stderr);
}

if (process.argv.indexOf('--preinstall') > -1) {
    print('INSTALL ANGULAR SCRIPT: Installing angular packages.');
    deleteAngularModules()
      .then(printStd)
      .then( () => installAngular() )
      .then(printStd);
} else if (process.argv.indexOf('--postinstall') > -1) {
    print('INSTALL ANGULAR SCRIPT: Installing post angular packages.');
    installPost().then(printStd);
}
else {
    print('INSTALL ANGULAR SCRIPT: Invalid arguments.');
}