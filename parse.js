// //PARSEINT

// console.log(parseInt("46")); //yete tiv chka, NaN a veradardznum
// //given a string
// let str = "   892.21  ";
// str = str.trim();
// let arrStr = str.split("");
// let arrStrToNum = [];
// console.log(arrStr);
// for (let i = 0; i < arrStr.length; i++) {
//   if (!isNaN(arrStr[i])) {
//     arrStrToNum.push(arrStr[i]);
//   } else {
//     break;
//   }
// }
// let strArrStrToNum = arrStrToNum.join("");
// console.log(strArrStrToNum);

//PARSEFLOAT
let seenDot = false;
let str = "   892.21  ";
str = str.trim();
let arrStr = str.split("");
let arrStrToNum = [];
console.log(arrStr);
for (let i = 0; i < arrStr.length; i++) {
  if (!isNaN(arrStr[i])) {
    arrStrToNum.push(arrStr[i]);
  } else if (arrStr[i] === "." && seenDot === false) {
    arrStrToNum.push(arrStr[i]);
    seenDot = true;
  } else {
    break;
  }
}
let strArrStrToNum = arrStrToNum.join("");
console.log(strArrStrToNum);
