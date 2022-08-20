//Function
//function declaration
//function game(){console.log('Spiderman');}
//
//let something = function()

//game ()
//function return
/*function sub(a,b){return a-b};
let result = sub(10,7);
console.log(result);//

//array
let names = ['a','b','c','d'];
let nums = [1,2,3,4,5,6];
console.log(nums[0]);
console.log(names[3]);*/

//Scope

//Hoisting

//

const arrC = [1, 2, "Huy", 3, 4, "a", "b"];
const arrD = [];
const arrE = [];
function numcheck(i) {
  if (Number.isInteger(i)) {arrD.push(i)}
 else if (i === "string") {arrE.unshift(i)}
}

arrC.forEach(numcheck);
console.log(arrD);
console.log(arrE);
console.log("HUYNGO");
