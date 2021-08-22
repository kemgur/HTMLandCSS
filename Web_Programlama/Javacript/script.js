/** 
console.log("Hosgeldiniz");
console.log("Hata");

let time = new Date();
console.log(time); //
console.log(typeof time); //object

//Get method:
console.log(time.getHours()); //11 -Parantez onemli
console.log(time.getFullYear());
console.log(time.getMilliseconds());

//Set method:
console.log(time.setDate(25));
//time.setFullYear(2023);

let birtday = new Date(1982,09,20)
console.log(time.getFullYear()-birtday.getFullYear());

//Number
let veri;

veri = Number("5");
veri = parseInt("5");
veri = parseFloat("5.5");


var sayi = 15.454545556;
veri = sayi.toPrecision(3)//15.5 ==> soldan itibaren 3 sayi verir.
veri = sayi.toFixed(3);//15.455 ==>virgulden itibaren 3 sayi verir.

veri = Math.PI;
veri =Math.round(3.5);//4
veri =Math.round(3.3);//3
veri =Math.ceil(3.3);//4 ==> Her halukarda yukari yuvarlar.
veri =Math.floor(3.3);//3 ==> Her halukarda asagi yuvarlar.
veri =Math.floor(Math.random()*10);//0 ile 10 arasinda sayi olusturur
veri =Math.floor(Math.random()*10 +1);//0 istemezsek 1 ekleriz.
veri = Math.pow(3,2);//3'un 2.kuvvetini alir
veri = Math.sqrt(81); //9 sayinin karakokunu alir
veri = Math.abs(-50); //50 sayinin mutlak degerni alir.
 
console.log(veri);
console.log(typeof veri);

//STRING

//ARRAYS(diziler)


//Kosullu Durumlar

const firstName = "Cagla";
const userName = "caglayilmaz";
const age = 20;
const isStudent = true;
const school  = "univercity";

if(userName == "caglayilmaz"){
    console.log("Merhaba Cagla");
}else{
    console.log("Kullanici belirlenemedi");
}

//Switch Kosul Yapisi

//Object literal
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

  const person1 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

  //Donguler

  //1: while loop

 let i =0;
 while(i<10){//sonsuz dongu
    console.log(i);
    i++;
 }



 //break ve continue
 //1.break
 let i =0;
 while(i<10){//sonsuz dongu
    console.log(i);
    if(i==6){
        break;
    }
    i++;
 };

 //2.continue
 let i =0;
 while(i<10){//sonsuz dongu
    if(i==6){   
        continue;
    }
    console.log(i)
    i++;
 };



 //Do While:
 let i =0;
  do{
      console.log(i);
      i++;
  }while(i<10);

  

  //for loop
  for(let i=0; i<10; i++){
    console.log(i);
  }

     */
  //for in Methodu
  let citys=["Istanbul", "Ankara", "Izmir", "Eskisehir"];
  for(let i in citys){
    console.log(`index :${i}  value: ${citys[i]}`);//index :0  value: Istanbul
  }

  //for each loop
  citys.forEach(function(item){//item : her bir elementi tek tek dondurur.
        console.log(item)//Istanbul Ankara Izmir Eskisehir
  })
 








