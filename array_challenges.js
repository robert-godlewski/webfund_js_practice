// Challenge solutions by Robert Godlewski
console.log("Challenge 1: Always Hungry");
function alwaysHungry(arr) {
    // your code here
    var isfood = false;
    for (i=0; i<arr.length; i++) {
        if (arr[i] == "food") {
            isfood = true;
            console.log("yummy");
        }
        if (arr[i] == arr.length-1 && isfood == false) {
            console.log("I'm hungry");
        }
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

//############################
console.log("Challenge 2: High Pass Filter");
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (i=0; i<arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

//#############################
console.log("Challenge 3: Better than average");
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    var ave = Math.round(sum/arr.length);
    // Debugging
    // console.log("the average is: " + ave);
    var count = 0
    // count how many values are greater than the average
    for (i=0; i<arr.length; i++) {
        if (arr[i] >= ave) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

//############################
console.log("Challenge 4: Array Reverse");
function reverse(arr) {
    // your code here
    for (i=0; i<(arr.length/2); i++) {
        var start = arr[i];
        var end = arr[arr.length-1-i];
        var temp = arr[i];
        arr[i] = end;
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

//#############################
console.log("Challenge 5: Fibonacci Array");
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    var i = 0;
    while (i<n-2) {
        var sum = fibArr[i] + fibArr[i+1];
        fibArr.push(sum);
        i++;
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
