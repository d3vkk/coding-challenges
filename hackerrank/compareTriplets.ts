function compareTriplets(a: number[], b: number[]): number[] {
  var aPoints: number = 0,
    bPoints: number = 0,
    i: number = 0;
  while (i < 3) {
    if (a[i] != b[i]) {
      a[i] > b[i] ? aPoints++ : bPoints++;
    }
    i++;
  }
  return [aPoints, bPoints];
}

const a = [1, 2, 3],
  b = [3, 2, 1];
console.log("compareTriplets:", compareTriplets(a, b));
