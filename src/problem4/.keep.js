//One by one
var sum_to_n_a = function (n) {
    //if n is equal or less than 0, the sum is 0
    if (n <= 0)
        return 0;
    var sum = 0;
    //we will add one by one until it reaches n
    for (var i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
};
//Using an Array
var sum_to_n_b = function (n) {
    var array = [];
    var sum = 0;
    //transform each number into a array
    for (var i = 0; i <= n; i++) {
        array.push(i);
    }
    //sum the array
    array.forEach(function (num) {
        sum += num;
    });
    return sum;
};
//formula
var sum_to_n_c = function (n) {
    //formula for adding consecutive numbers is n/2 * (firstNumber + lastNumber)
    var firstNumber = 1;
    var lastNumber = n;
    if (n <= 0)
        return 0;
    return (lastNumber / 2) * (firstNumber + lastNumber);
};
// Test cases
var test = [5, 10, 1, 0, -5];
test.forEach(function (n) {
    console.log("Testing n = ".concat(n));
    console.log("First way: ".concat(sum_to_n_a(n)));
    console.log("Second way: ".concat(sum_to_n_b(n)));
    console.log("Third way: ".concat(sum_to_n_c(n)));
    console.log("");
});
