
//Sayının rakamlarının küpünün toplamı kendisine eşitse Armstrong sayisidir. Örnek: 153 - 370 - 407
let sayi = prompt("Sayi giriniz: ");
let toplam = 0;
for(let i=0 ; i<=sayi.length; i++){
   let rakam = sayi.charAt(i)
   toplam+= rakam * rakam * rakam
}
if(Number(sayi)== toplam){
    alert("Armstrong Sayısıdır..");
}else{
    alert("Armstrong Sayısı Değildir..")
}   