"use strict";

(function () {
  var testObj = {};
  function basicLogger(message, options) {
    var _console;
    for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }
    (_console = console).log.apply(_console, ["%c" + message + ":", "background-color: ".concat((options === null || options === void 0 ? void 0 : options.bgColor) || "#b8f153", "; \n        padding: ").concat((options === null || options === void 0 ? void 0 : options.padding) || "2px 4px", "; \n        border-radius: ").concat((options === null || options === void 0 ? void 0 : options.borderRadius) || "4px", "; \n        font-weight: ").concat((options === null || options === void 0 ? void 0 : options.fontWeight) || "600", "; \n        font-size: ").concat((options === null || options === void 0 ? void 0 : options.fontSize) || "14px", " ; \n        color: ").concat((options === null || options === void 0 ? void 0 : options.textColor) || "black")].concat(rest));
  }
  function clearConsole() {
    console.clear();
  }
  function countLogs(message) {
    console.count(message || "rLogger");
  }
  function debug() {
    console.debug(testObj);
  }
  function logObjectGroup(object) {
    var dataObj = object;
    console.log(dataObj);
    basicLogger("This is the outer level");
    console.group();
    basicLogger("Level 2");
    console.group();
    basicLogger("Level 3");
    console.warn("More of level 3");
    console.groupEnd();
    basicLogger("Back to level 2");
    console.groupEnd();
    basicLogger("Back to the outer level");
  }

  // function filesync(){

  //     const configPath = path.resolve(__dirname, '../../../src/config.json');

  //     console.log("configPath", configPath);

  //     fs.readFileSync('path/to/file.txt', 'utf8', (err, data) => {
  //         if (err) {
  //             console.log('Error reading file:', err);
  //             return;
  //         }
  //         console.log('File contents:', data);
  //     });
  // }

  // filesync()

  exports.basicLogger = basicLogger;
  exports.clearConsole = clearConsole;
  exports.countLogs = countLogs;
  exports.debug = debug;
  exports.logObjectGroup = logObjectGroup;
  // exports.test = test
})();