// 1'den 10'a kadar olan sayıları ekrana yazdıran programı for döngüsü ile yazınız.

/*
for(let i = 1; i <= 10; i=i+2) {
    console.log(i)
}
*/

/*
for(let i = 1; i <= 10; i++) {
    if(i % 2 == 1) {
        console.log("Tek sayı")
    }else {
        console.log("Çift sayı")
    }
}*/
let toplam = 0;
for(let i = 50; i>=1; i--) {
    toplam = toplam + i;
    console.log(i)
}
console.log("Toplam: " + toplam)