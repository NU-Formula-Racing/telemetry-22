class read_csv{

    // create the following variables...
    // 1. array for a specific time value

    // create the following functions....
    // 1. return the data given a specific time
    // 2. max value for each of the columsn
    // 3. t = 0 values


    constructor(csv){
        this.dictionary_array = null;
        this.csvlocal = csv;
    }
    
    create_dictionary (file){
        var csv = require('jquery-csv');
        $.csv.toObjects(csv);
        
    }

    // some notes:
    // https://www.codegrepper.com/code-examples/javascript/javascript+how+to+create+a+class

    
}