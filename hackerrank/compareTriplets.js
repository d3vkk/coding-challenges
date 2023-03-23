function compareTriplets(a, b) {
    var aPoints = 0, bPoints = 0, i = 0;
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
