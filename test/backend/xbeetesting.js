const {
    time
} = require('console');
let SerialPort = require('serialport'); //.SerialPort
let xbee_api = require('xbee-api');
const fs = require('fs');
var C = xbee_api.constants;


var xbeeAPI = new xbee_api.XBeeAPI({
    api_mode: 1
});

var curFileName = 'binout/xbee-raw-' + Date.now().toString() + '.bin'

fs.writeFile(curFileName, '', function (err) {
    if (err) throw err;
    console.log('XBee raw data file created.');
});

let findAndListenToXBee = () => {
    SerialPort.list().then(ports => {
        ports.forEach(function(port) {
            if (port.serialNumber == 'D306E0R6') {
                listenToPortPath(port.path)
            }
        });
    });
};

let listenToPortPath = (portPath) => {

    var serialport = new SerialPort(portPath, {
        baudRate: 9600,
        parser: xbeeAPI.rawParser()
    });

    serialport.pipe(xbeeAPI.parser);
    xbeeAPI.builder.pipe(serialport);

    serialport.on('data', function(data) {
    
        console.log(data)
        fs.appendFile(curFileName, data, function (err) {
            if (err) throw err;
            console.log('Line added.');
        });
    });
}

console.log("im gonna try to find and start listening to the xbee!\nif the script exits right away, the xbee wasnt found :(")
findAndListenToXBee();
