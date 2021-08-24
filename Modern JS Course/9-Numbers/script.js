// Numbers

let val;

// val = Number('10');
// val = parseInt('10');
// val = parseFloat('10.5');
// val = parseInt('10a');number
// val = parseInt('a10a');//NaN
// val = isNaN('10');
// val = isNaN('a10');

// var num = 10.12456789;
// val = num.toPrecision(6);
// val = num.toFixed(2);

val = Math.PI;
val = Math.round(2.4);
val = Math.round(2.7);//en yakin onluga yuvarlar
val = Math.ceil(2.4);//ust onluga yuvarlar
val = Math.ceil(2.6);//
val = Math.floor(2.4);//alt onluga yuvarlar
val = Math.floor(2.7);
val = Math.sqrt(64);//kare kokunu alir
val = Math.pow(2,4);//sayinin ustunu alir
val = Math.abs(-100);//mutlak degerini alir
val = Math.min(1,2,3,2,4,9);
val = Math.max(4,5,6,4,98,7);//
val = Math.floor(Math.random()*100+1);

console.log(val);
console.log(typeof val);