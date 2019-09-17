let ArrToCheck = [1, 3, 5, 7, 9, 11, 13, 15];
let ToCheckAgainst = 30;

const checkArray = (ArrToCheck, ToCheckAgainst) => {
  for (i = 0; i < ArrToCheck.length; i++) {
    for (j = 0; j < ArrToCheck.length; j++) {
      let k = ToCheckAgainst - (ArrToCheck[i] + ArrToCheck[j]);
      if (ArrToCheck.includes(k)) {
        console.log(
          `the values that checks out are ${ArrToCheck[i]}, ${ArrToCheck[j]} and ${k}`
        );
      }
    }
  }
};

checkArray(ArrToCheck, ToCheckAgainst);
