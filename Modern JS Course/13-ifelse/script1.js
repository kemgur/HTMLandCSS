// var trafigeCikis = new Date('04/20/2014');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun =Math.floor(trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun<=365){
//     console.log('1.servis bakım süreniz geldi');
// }else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
//     console.log('2.servis bakım süreniz geldi');
// }else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//     console.log('3.servis bakım süreniz gelmiştir.')
// }else{
//     console.log('bilinmeyen bir süre');
// }

// console.log(trafiktekiGun);

/** 
var trafikCikis = new Date('04/20/2017');
trafikCikis.setHours(0,0,0,0);
var trafiktekiMs = Date.now()-trafikCikis.getTime();
var trafiktekiGun = Math.floor(trafiktekiMs/(1000*60*60*24));

if(trafiktekiGun<=365){
    console.log(`1. servis gununuz geldi`);
}else if(trafiktekiGun>265 && trafiktekiGun<=365*2){
    console.log(`2. servis gununuz geldi`)
}else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
    console.log(`3. servis gununuz geldi`)
}else{
    console.log(`Bilinmeyen bir sure`)
}
console.log(trafiktekiMs);
console.log(trafiktekiGun);
*/

//var result = prompt("Who's there ?");
 if(result=='cansel'){
    console.log('cancelled');
 }else if(result=='Admin'){
    console.log('Welcome Admin');
    //===============================
    var password =prompt("Enter the password");
    if(password=='cancel'){
        console.log('Cancelled')
    }else if(password=='12345'){
        console.log('Welcome Admin');
    }else{
        console.log('Wrong password');
    }
    //=================================
 }else{
    console.log("I don't know you");
 }






/** 

var result = prompt("who's there ? ");

if(result == 'cancel'){
    console.log('cancelled');
}else if(result == 'Admin'){   

    var password = prompt('enter your password : ');

    if(password =='cancel'){
        console.log('cancelled');
    }else if(password== '1234'){
        console.log('welcome Admin');
    }else{
        console.log('wrong password');
    }

}else{
    console.log('I dont know you');
}

*/