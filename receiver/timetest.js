const bufReplace = require('buffer-replace');

const sigil = Buffer.from([0x80, 0x01])
var buf = Buffer.from([0x69, 0x69, 0x80, 0x01, 0x10, 0x68, 0x10, 0x68, 0x00, 0xEA])

function shortToBytes(s)
{
    return [(s >> 8) & 0xFF, s & 0xFF]
} 

//function tim
//var timeBuf = Buffer.from([timep2])
while (true)
{

// var timenow = 0x100000001 % 0xFFFFFFFF // Date.now()
var timenow = Date.now() % 0xFFFFFFFF // Date.now()

var timep1 = timenow >> 16;
var timep2 = timenow & 0xFFFF
//console.log(timep2)
var timeBuf = Buffer.from([timep1, timep2])
var timeBuf = Buffer.from(shortToBytes(timep1).concat(shortToBytes(timep2)))

console.log(timeBuf)
console.log(timenow)

newFramebound = Buffer.concat([sigil, timeBuf])

console.log(bufReplace(buf, sigil, newFramebound))

}
