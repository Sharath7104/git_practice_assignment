// Check whether the given number is prime or not

let num = 13;
let count = 0;

for (let i = 1; i <= num; i++) {
  if (i % num == 0) {
    count++;
  }

} if (count == 2) {
  console.log("Yes");
}
else {
  console.log("No");
}