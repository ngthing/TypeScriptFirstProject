/* Created by Thi Nguyen 06/13/2018 */
const comma = ',';

// Helper function returns an array of numbers from text input value
const numbersFromInput = () => {
  let inputValue = (<HTMLInputElement>document.getElementById("numList")).value;
  let splitedValue: Array<number> = inputValue.split(comma).map(v => parseInt(v));
  let numbers = splitedValue.filter(v => !isNaN(v))
  return numbers;
}
const getSumAndProduct = () => {
  document.getElementById("sum").innerHTML = numbersFromInput().reduce((a, b) => a + b, 0).toString();
  document.getElementById("product").innerHTML = numbersFromInput().reduce((a, b) => a * b, 1).toString();
}
const getSum = () => {
  document.getElementById("sum").innerHTML = numbersFromInput().reduce((a, b) => a + b, 0).toString();
}

const getProduct = () => {
  document.getElementById("product").innerHTML = numbersFromInput().reduce((a, b) => a * b, 1).toString();
}

const getMostUsedCharacter = () => {
  let inputValue = (<HTMLInputElement>document.getElementById("string")).value;
  let mostUsedChar = '';
  let charTable = {}
  for (var i = 0; i < inputValue.length; i++) {
    var c = inputValue[i];
    if (!charTable[c]) {
     charTable[c] = 0 ;
    }
    charTable[c]++;
    if(mostUsedChar === '' || charTable[c] > charTable[mostUsedChar]){
        mostUsedChar = c;
    }
  }
  let result = `${mostUsedChar} with ${charTable[mostUsedChar]} times`;
  document.getElementById("mostUsedCharacter").innerHTML = result;
}
