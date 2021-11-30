const fs = require('fs');

const readStream = fs.createReadStream('./live-read-dir/lr-test.bin', {highWaterMark: 16});
const data = [];

readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log(chunk, chunk.length);
});

readStream.on('end', () => {
    console.log('end :', Buffer.concat(data).toString());
    // end : I am transferring in bytes by bytes called chunk
})

readStream.on('error', (err) => {
    console.log('error :', err)
})