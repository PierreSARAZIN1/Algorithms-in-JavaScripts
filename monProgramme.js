const fs = require('fs');

const fileName = process.argv[2];

const data = fs.readFileSync(fileName, 'utf8');
const array = data.split(' ').map(function(item) {
    return parseInt(item, 10);
});



console.log(array);

// Tri à bulles 
const bubbleArray = Object.values(array);
const bubbleSortingFunction = (array) => {
    let comparaison = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 1; j < array.length - i; j++) {
            comparaison++;
            if (array[j] < array[j - 1]) {
                let temp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = temp;
            };
        };
    };
    console.log(`Tri à bulles : ${comparaison} comparaisons => [${array}]. `);
};
bubbleSortingFunction(bubbleArray);


// Tri par insertion
const insertionArray = Object.values(array);
const insertionSortingFunction = (array) => {
    let comparaison = 0;
    for (i = 0; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
            comparaison++;
        };
        array[j + 1] = current;
    };
    console.log(`Tri par insertion : ${comparaison} comparaisons => [${array}]. `)
};
insertionSortingFunction(insertionArray);

// Tri par sélection
const selectionArray = Object.values(array);
const selectionSortingFunction = (array) => {
    let comparaison = 0;
    for (i = 0; i < array.length - 1; i++) {
        let iMin = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[iMin]) {
                iMin = j;

            };
            comparaison++;
        };
        let temp = array[i];
        array[i] = array[iMin];
        array[iMin] = temp;
    };
    console.log(`Tri par insertion : ${comparaison} comparaisons => [${array}]. `);
};

selectionSortingFunction(selectionArray);