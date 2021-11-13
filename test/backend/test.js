const net = require('net');
// Connect to a server @ port 42069
const client = net.createConnection({ host: '10.105.197.21', port: 42069 }, () => {
  console.log('connection made on 42069');
  client.write('HEWWO!');
});
client.on('data', (data) => {
  console.log(data.toString());
  client.end();
});
client.on('end', () => {
  console.log('connection ended');
});