/*Asal sayı uygulaması */
/*let sayi = Number(prompt("Sayı giriniz: "));
let sonuc = true;
for(let i = 2; i<= Math.floor(sayi/2); i++){
    if(sayi % i == 0){
        sonuc = false;
        break;
    }
}

if(sonuc){
    alert(sayi + " Asaldır");
}else{
    alert(sayi + " Asal değildir");
}*/

function asalSayi() {
    let sayi = document.getElementById("sayi").value;
    let sonucP = document.getElementById("sonuc");
    

    sayi = parseInt(sayi);

    if (sayi <= 1) {
        sonucP.textContent = sayi + " Asal değildir";
        sonucP.style.color = "red";
        return;
    }
  
    let sonuc = true;
    for (let i = 2; i <= Math.floor(Math.sqrt(sayi)); i++) {
        if (sayi % i === 0) {
            sonuc = false;
            break;
        }
    }

    if (sonuc) {
        sonucP.textContent = sayi + " Asaldır";
        sonucP.style.color = "green";
    } else {
        sonucP.textContent = sayi + " Asal değildir";
        sonucP.style.color = "red";
    }
}
