console.log("" + 1 + 0); //10 //qani vor operandneric meky string a,bolory kdarnan string, u kkpnen irar
console.log("" - 1 + 0); //-1 //qani vor arajin gorcoxutyuny -n a, stringy sarqum a number /0/, u katarum a gorcoxutyunnery 0 - 1 + 0 = -1
console.log(true + false); //1 //sarqum a number, gumarum a // 1 + 0 = 1
console.log(6 / "3"); //3 //"3"-y sarqum a number
console.log("2" + "3"); //23 //gumarum a, mejy ka string, aysinqn katarum a stringneri miacum
console.log(4 + 5 + "px"); //9px //skzbic katarum a arajin 2 operandneri(numbernei gumarumy), heto stacvacin gumarum a string, aysinqn mianum en
console.log("$" + 4 + 5); //$45 //"$"in miacnum a "4"y, heto stacvac stringin el miacnum a "5"y
console.log("4" - 2); //2 //- a, "4"y sarqum a number 4, u hanum 2
console.log("4px" - 2); //NaN //- a, string "4px"-y porcum a sarqi number, bayc qani vor mejy tarer kan, stanum a NotANumber
console.log(7 / 0); //Infinity //zut tivy 0i bajanac Infinity a tali
console.log(" -9 " + 5); // -9 5 //pastoren dimaci u hetevi spaceery avtomat chi maqrum
console.log(" -9 " - 5); //-14 // " -9 "-ic vercrec number -9-y, u -9-5=-14
console.log(null + 1); //1 //null-y sarqum a number` 0, u 0+1=1
console.log(undefined + 1); //NaN //undefinedy number piti sarqi, talis a NaN

console.log(Number("0x77") === 0x77); //true //0x77y tiv e 16akan hamakargum, Number()-ov hanum a ed tivy, u ayd tivy havasar e inqn iren
console.log(Number("077") === 077); //false //"077"y sarqum a tiv 77, 77 === chi 077
console.log(Number(" 12")); //12
console.log(isNaN(" ")); //false //qani vor Number(" ") 0 a talis
console.log(+""); //0
console.log(0.1 + 0.2 == 0.3); //false //jshgrit chi es gumarumnery js-um, stacvum a 0.3(bazmativ0ner)4, ed verjin 4-y xangarum a
console.log(9007199254740992 + 1 == 9007199254740992); //tivy shat mec a, inch vor avtoyi odometri princip a ashxatum. aysinqn hasel a mi keti vor ed +1-y lav chi ashxatum
console.log(9007199254740992 + 2 == 9007199254740994); //+2-y arden lav ashxatum a
console.log(0 === +0); //true //0-n mnum a 0
console.log(+0 === -0); //ayo
console.log(1 / "2"); //0.5 //"2"-y sarqum a number, katarum a bajanum
console.log(1 / 0); //Infinity
console.log(1 / -0); //-Infinity
console.log(Infinity / 6); //Infinity
console.log(Infinity / -256); //-Infinity
console.log(Infinity / Infinity); //NaN //anoroshutyun
console.log(0 / 0); //NaN
console.log(+true); //1
console.log(+false); //0
console.log(+null); //0
console.log(+undefined); //Nan
console.log(parseInt(".2")); //NaN
console.log(parseInt("077a")); //77
console.log(parseInt("0x77a")); //1914 //0x77a-n nerkayacvac a 16akan hamkargov, inqy vercnum, sarqum a 10akan, het a tali
console.log(parseInt("I’m the best value - said Infinity.")); //NaN
console.log(parseFloat("I’m the best value - said Infinity.")); //naN
console.log(parseInt("Infinity is the best value!")); //NaN
console.log(parseFloat("Infinity is the best value!")); //Infinity //tpum a Infinity, vorovhetev ytenc axper jan
console.log(parseFloat("12.78ff")); //12.78
