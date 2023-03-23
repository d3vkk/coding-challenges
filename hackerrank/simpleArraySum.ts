function simpleArraySum(ar: number[]): number {
  return ar.reduce((a, b) => a + b);
}

console.log("simpleArraySum:", simpleArraySum([1, 2, 3]));
