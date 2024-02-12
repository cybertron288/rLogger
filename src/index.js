import { baseLogger } from "./components/baseLogger";
import { clearConsole } from "./components/clearLogs";
import { countLogs } from "./components/countLogs";
import { debugLogger } from "./components/debugLogger";
import { getConfig } from "./utils/getConfig";
import { baseGroupLogger } from "./components/baseGroupLogger";
import { baseTable } from "./components/baseTable";
import { unitTestTable } from "./components/unitTestTable";
// import { baseTraceLogger } from "./components/baseTrace";


function objectLogger(object, label) {
  let dataObj = object;
  baseGroupLogger(label, dataObj, getConfig());
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

// exports.baseLogger = baseLogger;
// exports.clearConsole = clearConsole;
// exports.countLogs = countLogs;
// exports.debug = debug;
// exports.logObjectGroup = logObjectGroup;
// // exports.test = test

export {
  baseLogger,
  clearConsole,
  countLogs,
  debugLogger,
  objectLogger,
  baseTable,
  unitTestTable,
//   baseTraceLogger,
};
