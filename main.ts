/* Created by Thi Nguyen 06/13/2018 */
const comma = ',';

// Helper function returns an array of numbers from text input value
const numbersFromInput = (): number[] => {
  let inputValue = (<HTMLInputElement>document.getElementById("numList")).value;
  let splitedValue: Array<number> = inputValue.split(comma).map(v => parseInt(v));
  let numbers = splitedValue.filter(v => !isNaN(v))
  return numbers;
}
const sum = (a : number, b: number) : number => a + b;
const product = (a : number, b: number) : number => a * b;
const getSum = () : string => {
  return numbersFromInput().reduce(sum).toString();
}

const getProduct = () : string  => {
  return numbersFromInput().reduce(product,1).toString();
}

const getSumAndProduct = () : void => {
  document.getElementById("sum").innerHTML = getSum();
  document.getElementById("product").innerHTML = getProduct();
}

const getMostUsedCharacter = (): void => {
  let inputValue = (<HTMLInputElement>document.getElementById("string")).value;
  let mostUsedChar = '';
  let charTable = {}
  for (let i = 0; i < inputValue.length; i++) {
    let c = inputValue[i];
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
