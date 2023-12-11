/*
    1- Bakiye Görüntüleme
    2- Para Çekme
    3- Para Yatırma
    4- Çıkış
*/
let yeniSatir = "\r\n";
let bakiye = 1000;

let metin = 
"1- Bakiye Görüntüleme" + yeniSatir +
"2- Para Çekme" + yeniSatir +
"3- Para Yatırma" + yeniSatir +
"4- Çıkış" + yeniSatir +
"Seçiminiz: ";

//alert(metin);

let secim = prompt(metin);
switch(secim){
    case "1": 
        alert("Bakiyeniz: " + bakiye);
        break;

    case "2": 
        let cekilecekMiktar = Number(prompt("Çekilecek miktarı giriniz: "));
        if(cekilecekMiktar < bakiye){
            //basarili
            bakiye = bakiye - cekilecekMiktar;
            alert("Bakiyeniz: " + bakiye);
        }else{
            alert(
            "Bakiyenizden fazla para çekemezsiniz" + yeniSatir + 
            "Bakiyeniz: " + bakiye + " " + yeniSatir + 
            "Çekmek istediğiniz miktar: " + cekilecekMiktar);
            //basarisiz
        }
        break;
    
    case "3":
        let yatirilanMiktar = Number(prompt("Yatırılacak miktarı giriniz: "));
        bakiye = bakiye + yatirilanMiktar;
        alert("Güncel Bakiyeniz: " + bakiye);
        break;

    case "4":
        alert("Çıkış yapılıyor...");
        break;

    default:
        alert("Hatalı seçim yaptınız!, Lütfen 1-4 arası seçim yapınız..");
}