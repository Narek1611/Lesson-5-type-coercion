//PARSEINT

//console.log(parseInt("46")); //yete tiv chka, NaN a veradardznum
//given a string
let str = "   14g96  ";
str = str.trim();
let arrStr = str.split("");
let arrStrToNum = [];
//console.log(arrStr);
for (let i = 0; i < arrStr.length; i++) {
  if (isNaN(arrStr[0])) {
    console.log("NaN");
  }
  if (!isNaN(arrStr[i])) {
    arrStrToNum.push(arrStr[i]);
  } else {
    break;
  }
}

let strArrStrToNum = arrStrToNum.join("");
console.log(strArrStrToNum);

// //PARSEFLOAT
// let seenDot = false;
// let str = "   .2  ";
// str = str.trim();
// let arrStr = str.split("");
// let arrStrToNum = [];
// //console.log(arrStr);
// for (let i = 0; i < arrStr.length; i++) {
//   if (isNaN(arrStr[0]) && arrStr[0] !== ".") {
//     console.log("NaN");
//   }

//   if (!isNaN(arrStr[i])) {
//     arrStrToNum.push(arrStr[i]);
//   } else if (arrStr[i] === "." && seenDot === false) {
//     arrStrToNum.push(arrStr[i]);
//     seenDot = true;
//   } else {
//     break;
//   }
// }
// if (arrStr[0] === ".") {
//   arrStrToNum.unshift("0");
// }
// let strArrStrToNum = arrStrToNum.join("");
// console.log(strArrStrToNum);
