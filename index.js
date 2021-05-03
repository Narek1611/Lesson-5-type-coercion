//toNumber

console.log(Number("haha")); //NaN
console.log(Number("132d")); //NaN
console.log(Number("")); //0
console.log(Number(" 543   ")); //543
console.log(Number(true)); //1
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN
//nully tiv sarqeluc darnum a 0, undefinedy Nan

//sra imlicit-y, mer graci demic +enq dnum
console.log(typeof "abel"); //string
console.log(typeof +"abel"); //number
console.log(+"abel"); //NaN

//toString

console.log(typeof String(554)); //Stringi mej grac 554 numbery sarqec 554 string
console.log(typeof String(undefined)); // lyuboy grac sarqum a string
//console.log(String(undefined).split(""));
//sra imlicit dzevy gracin datark chakert gumareln a
console.log(" ");
console.log(typeof 44648);
console.log(typeof (44648 + ""));

console.log(" ");

console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false

console.log(Boolean(0)); //false
console.log(Boolean("0")); //true

console.log(Boolean("")); //false

//+,-,/,*
//+
//yete irar +vox opearndneric gone meky string a, avtomat mnacacn el en darnum string
console.log(4 + "5"); //45, 4y sarqum a "4", 4in uxxaki miacnum a 5
console.log(4 + 5); //9, erkusn el number en

//mnacac operatorneri depqum (-,*,/), inqy porcum a sarqi number, nor ani gorcoxutyunnery
console.log(true - "15"); //14    true-n bool-ic sarqum a number, aysinqn 1, "15"-n el stringic sarqum a 15 number

//abstract comparisons ==
// yerb stringy hamematum enq numberi het, mer stringy sarqum a number, heto irar het hamematum a
console.log(10 == "10"); //true //string '10'y sarqec number 10, u hamematec

//yerb inch vor ban hamematum enq booleani het, booleann el a sarqum tiv, u hamematum myus sarqac tvi het
//true = 1
//false = 0
console.log(true == 1); //true
console.log(true == "1"); // true 1=1
console.log(false == 0); //true 0=0
console.log(true == 3); //false, 1y havasar chi 3

//misht havasar en nulln u undefinedy
console.log(null == undefined);
console.log(undefined == null);
console.log(undefined == "");
console.log(void 0 == null);

//yete stringer enq hamematum, katarvum a lexicographic comparison
console.log("a" > "A"); //true, poqratarery mecatateric arjeqov mec en
console.log("a" > "z"); // false, aybubenov gnalov arjeqnery mecanum en
//mnacac epqerum porcum a sarqi number, heto hamemati
console.log(true > "-2");
console.log(Number(undefined));
