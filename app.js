let dakika =0;
let saniye =0;
let salise = 0;
let interval;

const getMinute = document.getElementById("dakika");
const getSecond = document.getElementById("saniye");
const getsplitsecond = document.getElementById("salisee");

const BaslatButonu= document.getElementById("baslat");
const SıfırlaButonu =document.getElementById("sıfırla");
const DurButonu = document.getElementById("dur");

BaslatButonu.addEventListener("click",() =>{
     interval = setInterval(timer,10);
});
DurButonu.onclick = function () {
    clearInterval(interval);
}

SıfırlaButonu.addEventListener("click",() => {
    salise="00";
    saniye="00";
    dakika="00";
    getMinute.innerHTML = dakika;
    getSecond.innerHTML = saniye;
    getsplitsecond.innerHTML =salise;
})

function timer () {
salise++;
if(salise <= 9 ){
    getsplitsecond.innerHTML = "0" + salise;
 }
 if(salise > 9) {
     getsplitsecond.innerHTML=salise;
 }
 if(salise > 99){
     saniye++ ;
     getSecond.innerHTML ="0" + saniye;
     salise= 0 ;
     getsplitsecond.innerHTML= "0" + salise;
 }
 if(saniye > 9){
     getSecond.innerHTML = saniye;
     
 }
 if(saniye>59){
     dakika++ ;
     getMinute.innerHTML = "0" + dakika ;
     saniye =0 ;
     getSecond.innerHTML =saniye ;
 }
 if(dakika > 9){
     getMinute.innerHTML =dakika ;
 }
}