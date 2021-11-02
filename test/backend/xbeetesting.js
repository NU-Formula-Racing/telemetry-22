const { time } = require('console');
let SerialPort = require('serialport'); //.SerialPort
let xbee_api = require('xbee-api');
let xbeeRx = require('xbee-rx');
var C = xbee_api.constants;

//document.write("baba baba");

var xbeeAPI = new xbee_api.XBeeAPI({
    api_mode: 1
  });

// function sleep(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// let getPortsList = () => {
//   SerialPort.list().then(ports => {
//     ports.forEach(function(port) {
//       console.log(port);
//       if (port.serialNumber == 'D306E0R6') {
//         let serialport = new SerialPort(port.path, {baudRate: 57600});
//         console.log(serialport)
//       }
//     });
//   });
// };


//getPortsList();

var serialport = new SerialPort("COM7", {
  baudRate: 9600,
  parser: xbeeAPI.rawParser()
});
serialport.pipe(xbeeAPI.parser);
xbeeAPI.builder.pipe(serialport);

// var xbee = xbeeRx({
//   serialport: 'COM7',
//   serialportOptions: {
//       baudRate: 9600
//   },
//   module: "ZigBee",
//   api_mode: 1
// });


  
// All frames parsed by the XBee will be emitted here

xbeeAPI.on("frame_object", function(frame) {
    console.log(">>", frame);
});

// xbeeAPI.parser.on("data", function(frame) {
//   console.log(">>", frame);
// });

serialport.on('data', function (data) {
  // try {
  //     xbeeAPI.parseRaw(data);
  // } catch (e) {
  //     console.error(e);
  // }
  xbeeAPI.on("frame_object", function (frame) {
      console.log(frame);
      // do what do you want with the frame
  });
});
// subscription = xbee.allPackets
//     .subscribe(function (packet) {
//         console.log(packet);
//     });

console.log("hi");

// while (true) {
//   sleep(1);
// }

