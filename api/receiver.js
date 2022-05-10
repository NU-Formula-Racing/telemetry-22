const net = require('net')
const readline = require('readline');

const clientSock = new net.Socket();
clientSock.connect({port: 42069, host: '10.105.160.88'}, () =>
{
    console.log("connected");
})

clientSock.on('data', (data) =>
{
    console.log(data.toString('ascii'));
})

clientSock.on('ready', (data) => {
    console.log('WEIOJFOIWEFIJOJWHEIOFHEWIOJH')
})

clientSock.on('error', (error) =>
{
    console.log('ERROR: ' + error.toString('ascii'));
})

const rl = readline.createInterface({input: process.stdin})
rl.on('line', (line) =>
{
    clientSock.write(line)
})
