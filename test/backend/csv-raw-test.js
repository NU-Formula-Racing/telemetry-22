const fs = require('fs');
const sensor_names = require('sensor_names.json');

let colHeads, currentRow;

let delim = ['\n', ',']; // Row and column delimiters, respectively

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
colHeads = ['drive','asym','eq_low','eq_mid','eq_high','gain']; // 6
currentRow = _csvRowFormat(colHeads);
fs.writeFile('csv-fs.csv', currentRow, function (err) {
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
    return [i * 0.1, i * 0.1 * (-1)**i, 0.5^i, 1, 2*i, 10^i];
}

// Add value rows into CSV
for (let i = 0; i < 4; i++) {
    currentRow = _csvRowFormat(_generateValues(i))
    fs.appendFile('csv-fs.csv', currentRow, function (err) {
        if (err) throw err;
        console.log(currentRow);
    });
}

// Postscript: try opening the .csv file using a csv module or another application to test its validity.