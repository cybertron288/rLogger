

(function() {

    let testObj = {}


    function basicLogger(message, options, ...rest) {
        console.log(
        "%c" + message + ":", 
        `background-color: ${options?.bgColor || "#b8f153"}; 
        padding: ${options?.padding || "2px 4px"}; 
        border-radius: ${options?.borderRadius || "4px"}; 
        font-weight: ${options?.fontWeight || "600"}; 
        font-size: ${options?.fontSize || "14px"} ; 
        color: ${options?.textColor || "black"}`, 
        ...rest);
    }

    function clearConsole() {
        console.clear()
    }

    function countLogs(message) {
        console.count(message || "rLogger")
    }
    
    function debug(){
        console.debug(testObj)
    }

    function logObjectGroup(object) {
        let dataObj = object


        function logKeyValuePairs(obj, parentKey = '') {
            for (const key in obj) {
                if (typeof obj[key] === 'object' && obj[key] !== null) {
                    console.group();
                    logKeyValuePairs(obj[key], `${parentKey}${key}.`);
                    console.groupEnd();
                } else {
                    console.group();
                    basicLogger(`${parentKey}${key}: ${obj[key]}`);
                    console.groupEnd();
                }
            }
        }

        console.group();
        logKeyValuePairs(dataObj)
        console.groupEnd();

        // console.log(dataObj)
        
        // basicLogger("This is the outer level");
        // console.group();
        // basicLogger("Level 2");
        // console.group();
        // basicLogger("Level 3");
        // console.warn("More of level 3");
        // console.groupEnd();
        // basicLogger("Back to level 2");
        // console.groupEnd();
        // basicLogger("Back to the outer level");
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

    exports.basicLogger = basicLogger
    exports.clearConsole = clearConsole
    exports.countLogs = countLogs
    exports.debug = debug
    exports.logObjectGroup = logObjectGroup
    // exports.test = test
})()