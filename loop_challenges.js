// Challenge solutions by Robert Godlewski

console.log("Challenge 1: Print odds 1-20");
for (i=1; i<=20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
    // Debugging
    // else {
    //     console.log("skip");
    // }
}

console.log("Challenge 2: Decreasing Multiples of 3");
for (i=100; i>0; i--) {
    if (i % 3 == 0) {
        console.log(i);
    }
    // Debugging
    // else {
    //     console.log("skip");
    // }
}

console.log("Challenge 3: Print the Sequence");
for (i=4; i>-4; i-=1.5) {
    console.log(i);
}

console.log("Challenge 4: Sigma");
var sum = 0;
for (i=1; i<=100; i++) {
    sum += i
}
console.log("1 + 2 + 3 + ... + 98 + 99 + 100 = " + sum);

console.log("Challenge 5: Factorial");
var product = 1;
for (i=1; i<=12; i++) {
    product *= i;
}
console.log("1 * 2 * 3 * ... * 10 * 11 * 12 = " + product);
