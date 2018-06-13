/* Created by Thi Nguyen 06/13/2018 */
var comma = ',';
// Helper function returns an array of numbers from text input value
var numbersFromInput = function () {
    var inputValue = document.getElementById("numList").value;
    var splitedValue = inputValue.split(comma).map(function (v) { return parseInt(v); });
    var numbers = splitedValue.filter(function (v) { return !isNaN(v); });
    return numbers;
};
var getSum = function () {
    document.getElementById("sum").innerHTML = numbersFromInput().reduce(function (a, b) { return a + b; }, 0).toString();
};
var getProduct = function () {
    document.getElementById("product").innerHTML = numbersFromInput().reduce(function (a, b) { return a * b; }, 1).toString();
};
