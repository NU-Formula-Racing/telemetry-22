const fs = require('fs');
const sensornames = require('./sensor_names.json');

let colHeads, currentRow;

let delim = ['\n', ',']; // Row and column delimiters, respectively


let path = "./test/backend/csv_write/csv-fs.csv"
/**
 * Joins the elements of the given array into a single string using global delims.
 * Used to format a given array into CSV format.
 * 
 * @param {Array} csvArr 
 */
function _csvRowFormat(csvArr) {
    return csvArr.join(delim[1]) + delim[0];
}

// Create new file with array of strings as columne titles
colHeads = sensornames.sensor_names//['drive','asym','eq_low','eq_mid','eq_high','gain']; // 6
currentRow = _csvRowFormat(colHeads);
fs.writeFile(path, currentRow, function (err) {
    if (err) throw err;
    console.log(
        `New file added:
        ${currentRow}`
    );
});

/**
 * Test function to generate values to store in CSV
 * 
 * @param {number} i
 */
function _generateValues(i) {
    return [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
    //return [i * 0.1, i * 0.1 * (-1)**i, 0.5^i, 1, 2*i, 10^i];
}

// Add value rows into CSV
for (let i = 0; i < 4; i++) {
    currentRow = _csvRowFormat(_generateValues(i))
    fs.appendFile(path, currentRow, function (err) {
        if (err) throw err;
        console.log(currentRow);
    });
}

// Postscript: try opening the .csv file using a csv module or another application to test its validity.