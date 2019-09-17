let Arr = [15, 23, 46, 70, 98]

// collapse the array into one unsorted string
// i.e '1523467098' 
let concatTheObject = (theArray) => {
    // returns all split elements as a string
    // i.e: '1523467098'
    let concatString = theArray.join('')

    // return the new array
    return concatString
}

// split the string into individual string elements
// i.e [ '1', '5', '2', '3', '4', '6', '7', '0','9', '8']
const splitTheObjects = (ArrayToManip) => {
    return (
        // run the concat method to return the collapsed string
        concatTheObject(ArrayToManip)
            // split the string to individual strings
            // i.e [ '1', '5', '2', '3', '4', '6', '7', '0','9', '8']
            .split("")
            // map through the strings and convert each object into an integer
            .map((eachString) => { return parseInt(eachString) })
    )
}

// used by the array sort method to sort the numbers from biggest to smallest
sortNumbersFromBigToSmall = (a, b) => {
    return b - a;
}

// does the actual sorting
returnSortedArray = (ArrayToSort) => {
    return (
        // return the unsorted array
        splitTheObjects(ArrayToSort)
            // sort from biggest to smallest 
            // using the sortNumbersFromBigToSmall method
            .sort(sortNumbersFromBigToSmall)
            // join them to one object
            .join('')
    )
}

// log the sorted array 
// by passing the array to the returnSortedArray function
console.log(returnSortedArray(Arr))
