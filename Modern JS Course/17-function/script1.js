// Function Declarations(beyanname, aciklama)
function myFunction(a, b) {
    return a * b;
  }
// function sum(a,b){
//     var c = a+b;
//     return c;
// }

// console.log(sum(10,20));

// Function Expressions (ifade, anlatim, deyim)
const x = function (a, b) {return a * b};
//After a function expression has been stored in a variable, the variable can be used as a function:

// const sum = function(a,b){

//     if(typeof a === 'undefined'){ a=0; }
//     if(typeof b === 'undefined'){ b=0; }

//     var c = a+b;
//     return c;
// }

// ES6 Default Parameters
const sum = function(a=0,b=0){
    var c = a+b;
    return c;
}

function sumAll(){
    var total = 0;
    for(let i =0;i<arguments.length;i++){
         total+=arguments[i];   
    }
    return total;
}

console.log(sum(10,30));
console.log(sum(10)); // NaN
console.log(sum(10,30,40,50));
console.log(sumAll(10,20,30,10,30));