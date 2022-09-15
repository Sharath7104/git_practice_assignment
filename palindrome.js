//Check whether the given string is palindrome or no
let str = "Racecar"
let bag = "";
let gunny = "";

for (i = 0; i < str.length; i++) {
  gunny = gunny + str[i];
}



for (i = str.length - 1; i >= 0; i--) {

  bag = bag + str[i];

}

if (gunny == bag) {
  console.log("Yes");
} else {
  console.log("No");
}