/*
    *1- Türkçe 40 
    *2- Matemtik 40
    *3- Sosyal Bilimler 20
    *4- Fen Bilimleri 20

    ---> 100 puan ÖSYM veriyor
    ---> Okul puanı max 60 veriyor.
*/

let turkceDogru, tukceYanlis = 0;
let matematikDogru, matematikYanlis = 0;
let sosyalDogru, sosyalYanlis = 0;
let fenDogru, fenYanlis = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama Programına Hoşgeldiniz..." + yeniSatir+
"1- Puan Hesapla" + yeniSatir+
"2- Çıkış";

let secim = prompt(mesaj);

switch (secim) {
    case "1":
        let turkceDogru = Number(prompt("Türkçe Doğru Sayısı"));
        let turkceYanlis = Number(prompt("Türkçe Yanlış Sayısı"));

        let matematikDogru = Number(prompt("Matematik Doğru Sayısı"));
        let matematikYanlis = Number(prompt("Matematik Yanlış Sayısı"));

        let sosyalDogru = Number(prompt("Sosyal Bilimler Doğru Sayısı"));
        let sosyalYanlis = Number(prompt("Sosyal Bilimler Yanlış Sayısı"));

        let fenDogru = Number(prompt("Fen Bilimleri Doğru Sayısı"));
        let fenYanlis = Number(prompt("Fen Bilimleri Yanlış Sayısı"));

        let okulPuan = Number(prompt("Okul Puanınız"));

        let turkceNet = turkceDogru - (turkceYanlis / 4);
        let matematikNet = matematikDogru - (matematikYanlis / 4);
        let sosyalNet = sosyalDogru - (sosyalYanlis / 4);
        let fenNet = fenDogru - (fenYanlis / 4);

        let puan = turkceNet * 3.3 + matematikNet * 3.3 + sosyalNet * 3.4 + fenNet * 3.4 + okulPuan * 0.6 + 100; + yeniSatir;
        alert("TYT Puanınız: " + puan + yeniSatir+
        "Türkçe Netiniz: " + turkceNet + yeniSatir+
        "Matematik Netiniz: " + matematikNet + yeniSatir+
        "Sosyal Bilimler Netiniz: " + sosyalNet + yeniSatir+
        "Fen Bilimleri Netiniz: " + fenNet
        );

        break;

    case "2":
        alert("Çıkış yapılıyor...");
        break;

    default:
        alert("Hatalı seçim yaptınız!, Lütfen 1-2 arası seçim yapınız..");
        break;
}