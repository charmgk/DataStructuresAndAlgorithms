/*
given:

[15,23,46,70,98] return 0
[98,15,23,46,70] return 1
[70,98,15,23,46] return 2
[46,70,98,15,23] return 3

Rules:
don't use variables
*/

let Arr = [15, 23, 46, 70, 98]

// using variables

/*
        1.
// remove last item and assign the removed to object
let removed_from_behind = Arr.pop();

// re-add the previously removed item to the start of the array
let added_from_front = Arr.unshift(removed_from_behind)

// result: [ 98, 15, 23, 46, 70 ]
*/

// using no variables

/*
        2.
//This returns all the 3 modified arrays
const modifiedArray = (anArray, anotherArray) => {

    for (i = 0; i < 3; i++) {

        // re-add the removed item to the start now
        anArray.unshift(
            // remove the last item from the array
            anArray.pop()
        )

        console.log(anArray)

    }

}

modifiedArray(Arr);
*/


// function arraysEqual(arr) {

//     let arrToCheckAgainst = [15, 23, 46, 70, 98]

//     if(arr.length !== arrToCheckAgainst.length)
//         return false;
//     for(var i = arr.length; i--;) {
//         if(arr[i] !== arrToCheckAgainst[i])
//             return false;
//     }

//     return true;
// }


function arraysEqual(arr) {

    let arrToCheckAgainst = [15, 23, 46, 70, 98]

    if (arr.length !== arrToCheckAgainst.length)
        return false;

    arrToCheckAgainst.forEach((item) => {
        arr.forEach((anotherItem) => {
            if (item == anotherItem) {
                return true
            }
        })
    });
    // for(var i = arr.length; i--;) {
    //     if(arr[i] !== arrToCheckAgainst[i])
    //         return false;
    // }

    return false;
}

console.log(arraysEqual(Arr))

// let finalArray = []
// Juices.map((juice) => {
//   Fruits.map((fruit) => {

//     if(juice.juiceId === fruit.fruitId){
//       finalArray.push({customer: juice.customer, fruit: fruit.name}) 
//     }

//   });
// });







// console.log(Arr.slice())
// returns [ 15, 23, 46, 70, 98 ]

// for (i = 0; i < 3; i++) {
//     // creates new array based on old one
//     console.log(Arr.slice())

//     // push item to start of new arr
//     Arr = Arr.
//         unshift(
//             // remove last item
//             Arr.pop()
//         )

//     console.log(Arr)
// }
