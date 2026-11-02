//problem 1
function checkAge (age) {
    if (age>=18) {
        return "Adult";
    } else {
        return "Not Adult"
    }
}
console.log(checkAge(20));


// problem 2
function Square(number) {
    return number*number
}
console.log(Square(4));


//problem 3 
function getEven(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (array [i] %2 === 2) {
            result.push(array[i]);
        }
    }
    return result;
}
console.log(getEven([1,2,3,4,5]))

// problem 4
function getSum(array) {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
        
    }
    return sum;
}
console.log(getSum([1,2,3,4,5]))