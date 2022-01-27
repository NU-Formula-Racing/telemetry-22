//"use strict";

const {
    time
} = require('console');
let SerialPort = require('serialport'); //.SerialPort
let xbee_api = require('xbee-api');
const fs = require('fs');
const yargs = require('yargs');
const bufReplace = require('buffer-replace');


const argv = yargs.option('raw', {
    type: 'boolean'
}).argv

const sigil = Buffer.from([0x80, 0x01])

const snail = true;
if (!snail) {
    throw "\033[91m !!!!!!! THE SNAIL GOD IS DISPLEASED !!!!!! \033[39m"
}

var C = xbee_api.constants;


var xbeeAPI = new xbee_api.XBeeAPI({
    api_mode: 1
});

var curFileName = 'binout/xbee-timespliced-' + Date.now().toString() + '.bin'


// USE LOG IF VERBOSE
// INSTEAD OF CONSOLE . LOG
// TO AVOID HEADACHES
function logIfVerbose(obj) {
    if (!argv.raw) {
        console.log(obj)
    }
}

fs.writeFile(curFileName, '', function(err) {
    if (err) throw err;
    logIfVerbose('XBee raw data file created.');
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

function shortToBytes(s) {
    return [(s >> 8) & 0xFF, s & 0xFF]
}

let timeBuf = () => {

    var timenow = Date.now() % 0xFFFFFFFF

    var timep1 = timenow >> 16;
    var timep2 = timenow & 0xFFFF;

    return Buffer.from(shortToBytes(timep1).concat(shortToBytes(timep2)))
}

let listenToPortPath = (portPath) => {

    
    var serialport = new SerialPort(portPath, {
        baudRate: 9600,
    });

    serialport.pipe(xbeeAPI.parser);
    xbeeAPI.builder.pipe(serialport);

    var maybeSplitSigil = false;

    serialport.on('data', function(data) {

        lastByte = data[data.length-1]
        pentByte = data[data.length-2]
        
        if (maybeSplitSigil && data[0] == 0x01)
        {
            var augHalf = Buffer.concat([Buffer.from([0x01]), timeBuf()])
            data = bufReplace(data, Buffer.from([0x01]), augHalf)
            logIfVerbose("\n\nsplit sigil")
        }
        else if ((lastByte == 0x01) && (pentByte == 0x80))
        {
            data = bufReplace(data, sigil, Buffer.concat([sigil, timeBuf()]))

            logIfVerbose("\n\na framesigil! time to splice")
        }
        maybeSplitSigil = (lastByte == 0x80)
        

        if (argv.raw) {
            process.stdout.write(data.toString())
        }

        logIfVerbose(data)
        fs.appendFile(curFileName, data, function(err) {
            if (err) throw err;
            //logIfVerbose('Line added.');
        });
    });
}

logIfVerbose("im gonna try to find and start listening to the xbee!\nif the script exits right away, the xbee wasnt found :(")
findAndListenToXBee();
