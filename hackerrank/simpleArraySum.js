function simpleArraySum(ar) {
    return ar.reduce(function (a, b) { return a + b; });
}
console.log("simpleArraySum:", simpleArraySum([1, 2, 3]));
