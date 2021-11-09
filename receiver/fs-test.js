let fs = require('fs');

fs.writeFile('test-file.txt', 'Hello there.\n', function (err) {
    if (err) throw err;
    console.log('File added.');
});

for (let i = 0; i < 4; i++) {
    fs.appendFile('test-file.txt', 'General Kenobi.\n', function (err) {
        if (err) throw err;
        console.log('New line written.');
    });
}