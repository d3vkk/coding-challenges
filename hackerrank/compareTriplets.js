function compareTriplets(a, b) {
    var _a = [0, 0, 0], aPoints = _a[0], bPoints = _a[1], i = _a[2];
    while (i < 3) {
        if (a[i] != b[i]) {
            a[i] > b[i] ? aPoints++ : bPoints++;
        }
        i++;
    }
    return [aPoints, bPoints];
}
var a = [1, 2, 3], b = [3, 2, 1];
console.log("compareTriplets:", compareTriplets(a, b));
