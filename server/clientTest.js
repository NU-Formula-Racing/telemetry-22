const net = require('net');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
// Connect to a server @ host [host's ip address] port 42069
const client = net.createConnection({ host: '10.105.197.21', port: 42069 }, () => {
  console.log('connection made on 42069');
  client.write('HEWWO!');
});
client.on('data', (data) => {
  console.log(data.toString());
  // if (data.toString() == ":)") client.end();
  readline.question("Send a command to the server: ", command => {
    client.write(command);
    readline.close();
  });
});
client.on('end', () => {
  console.log('connection ended');
});