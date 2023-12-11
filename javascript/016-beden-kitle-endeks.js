//* Beden Kitle Endeksi
/*
let kilo = Number(prompt("Kilonuzu giriniz (kg): "));
let boy = Number(prompt("Boyunuzu giriniz (m): "));

let sonuc = kilo / (boy*2);
if(sonuc<18.5){
    console.log(sonuc.toFixed(2) + " İdeal kilonun altında...");
}else if(sonuc>=18.5 && sonuc<24.9){
    console.log(sonuc.toFixed(2) + " İdeal kilonun altında...");
}else if(sonuc>=25 && sonuc<29.9){
    console.log(sonuc.toFixed(2) + " İdeal kilo...");
}else if(sonuc>=30 && sonuc<39.9){
    console.log(sonuc.toFixed(2) + " İdeal kilonun üstünde...");
}else if(sonuc>=40){
    console.log(sonuc.toFixed(2) + " İdeal kilonun çok üstünde...");
}
*/

//* Benzin İstasyon

/*
    1- Dizel : 24.53
    2- Benzin : 22.25
    3- LPG : 11.1

    Gelen müşteriden alacağımız bilgiler;
    1- Yakıt Tipi
    2- Kaç litre yakıt alacak
*/


let dizel = 24.53 , benzin = 22.25 , lgp = 11.1;
const yeniSatir = "\r\n";

const yakitMetni = "1-Dizel" + yeniSatir + 
"2-Benzin" + yeniSatir + 
"3-LPG" + yeniSatir + "Yakıt tipini seçiniz: ";

let yakitTipi = Number(prompt(yakitMetni));

if(yakitTipi==1){
    let litre = Number(prompt("Kaç litre yakıt alacaksınız? "));
    let tutar = litre * dizel;
    alert("Ödenecek tutar: " + tutar.toFixed(2) + " TL");
} else if(yakitTipi==2){
    let litre = Number(prompt("Kaç litre yakıt alacaksınız? "));
    let tutar = litre * benzin;
    alert("Ödenecek tutar: " + tutar.toFixed(2) + " TL");
} else if(yakitTipi==3){
    let litre = Number(prompt("Kaç litre yakıt alacaksınız? "));
    let tutar = litre * lgp;
    alert("Ödenecek tutar: " + tutar.toFixed(2) + " TL");
} else {
    alert("Hatalı giriş yaptınız...");
}

