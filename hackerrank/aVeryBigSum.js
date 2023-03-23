function aVeryBigSum(ar) {
    return ar.reduce(function (a, b) { return a + b; });
}
var ar = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log("aVeryBigSum:", aVeryBigSum(ar));
