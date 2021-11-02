const { time } = require('console');
let SerialPort = require('serialport'); //.SerialPort
let xbee_api = require('xbee-api');
var C = xbee_api.constants;


var xbeeAPI = new xbee_api.XBeeAPI({
    api_mode: 1
  });


 let getPortsList = () => {
   SerialPort.list().then(ports => {
     ports.forEach(function(port) {
       //console.log(port);
       if (port.serialNumber == 'D306E0R6') {
         //let serialport = new SerialPort(port.path, {baudRate: 57600});
         console.log(port)
       }
     });
   });
 };

//var portPath;
//let getPort = () => {SerialPort.list().then(
 //   ports => {
    
   // portPath = ports.find(port => port.serialNumber == 'D306E0R6').path);

//    });
//};

//console.log(getPortsList());

console.log("ur on ur own for port path lmao")
var serialport = new SerialPort("/dev/tty.usbserial-D306E0R6", {
  baudRate: 9600,
  parser: xbeeAPI.rawParser()
});
serialport.pipe(xbeeAPI.parser);
xbeeAPI.builder.pipe(serialport);

serialport.on('data', function (data) {
    console.log(data);
});
