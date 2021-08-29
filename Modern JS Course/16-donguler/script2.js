/* 
        Demo Loops : Sayı Tahmin Oyunu
   1-10 arası rastgele sayı üretilen bir sayıyı 
   aşağı yukarı ifadeleri ile buldurmaya çalışın.
   ** puanlama yapın.
   ** kullanıcı kaç kerede bileceğini belirtebilsin.
*/
var hak, can;
var tahmin, sayac=0;
var sayac = Math.floor((Math.random()*10)+1);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('Bir sayi giriniz'));

    if(sayi==tahmin){
        console.log(`Tebrikler ${sayac} kerede bildiniz`);
        console.log(`Puan: ${100 -(20*(sayac-1))}`);
        break;
    }else if(sayi>tahmin){
        console.log('Yukari');
    }else{
        console.log('Asagi');
    }

    if(hak==0){
        console.log('Hakkiniz bitti Sayi : '+sayi +' idi.');
    }

}
console.log(sayi);


/** 
var hak,can;
var tahmin,sayac=0;
var sayi = Math.floor((Math.random()*10)+1);
can = Number(prompt('kaç kerede bileceksiniz ?'));
hak = can;

console.log(sayi);

while(hak>0){
    hak--;
    sayac++;
    tahmin = Number(prompt('bir sayı giriniz'));

    if(sayi == tahmin){
        console.log(`Tebrikler ${sayac} defada bildiniz.`);
        console.log(`puan : ${100 - (100/can)*(sayac-1)}`);
        break;
    }else if (sayi > tahmin){
        console.log('yukarı');
    }else{
        console.log('aşağı');
    }

    if(hak==0){
        console.log('hakkınız bitti. sayı :'+sayi);
    }
}

*/