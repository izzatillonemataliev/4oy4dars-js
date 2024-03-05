// let One = prompt("Minut kiriting:");
// function format(minut) {
//   let result = minut * 60;
//   console.log(result);
// }
// format();

// 4masala
// function parametr(asos, baland) {
//   let result = (asos * baland) / 2;
//   console.log(result);
//   return;
// }
// parametr(4, 5);

// 5masala

// function yoshdanKunlar(umur) {
//   var kunlar = umur * 365;
//   return kunlar;
// }
// var yosh = prompt("Yoshingizni kirting:");
// var kunlar = yoshdanKunlar(yosh);
// console.log(yosh + " yosh " + kunlar);

// 6masala
// function kub(son) {
//   return Math.pow(son, 3);
// }
// console.log(kub(4));

// 7masala

// ------------------Uy ishi-----------------

// 10.Uchburchakning uchinchi tomonining eng uzun qiymatini
// qaytaradigan funksiya yasang.
// Formula: Eng uzun uchinchi tomon = (tomon1 + tomon2) - 1

// function uchinchiTomon(tomon1, tomon2) {
//     let result = (tomon1 + tomon2) -1
//     console.log(result);
// }
// uchinchiTomon(8,10)

// 11Ikkita son argument sifatida kiritilsa, ushbu ikkala sonni birinchisini ikkinchisiga bo’lgandagi qoldiqni qaytarib beradigan
// funksiya yasang

// function qoldiqniTop(son1, son2) {
//     return son1 % son2;
// }
// let son1 = 10;
// let son2 = 3;
// let qoldiq = qoldiqniTop(son1, son2);
// console.log(qoldiq);

// 12.Turtburchakning bo’yi va eni berilsa uning yuzini hisoblab
// qaytaradigan funksiya yasang. Formula S = bo’yi * eni

// function turtburchakYuzi(boyi, eni) {
//     let natija = boyi * eni
//     console.log(natija);
// }
// turtburchakYuzi(5,7)

// 13.Funksiya “a” argument sifatida string ma’lumot qabul qiladi.
// ushbu funksiya “Something” stringiga ” ” bo’sh joy va “a”
// stringini birlashtirib qaytarsin.

// function birlashtir(a) {
//     return "Something" + " " + a;
// }
// let malumot = "example";
// let natija = birlashtir(malumot);
// console.log(natija);

// 14.Quyidagi namunalarga qaragan holatda funksiya yasang

// let son = +prompt("Raqam kiriting:");
// function sonOne(son) {
//   let natija = son ** 2;
//   console.log(natija);
// }
// sonOne(son);

// 15Funksiya raqam qabul qiladi. Agar ushbu raqam 0dan kichik
// yoki teng bo’lsa funksiya rost qaytarsin aks holda yolg’on.

// function tekshir(raqam) {
//   if (raqam <= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(tekshir(0));
// console.log(tekshir(5));
// console.log(tekshir(-3));

// 16.Funksiya ko’p burchakli shaklning burchaklar sonini qabul
// qiladi. Natijada funksiya ushbu shaklning ichki burchaklar
// yig’indisini qaytarsin. Formula (n - 2) x 180

// function burchaklarSoni(burchaklar) {
//   return (burchaklar - 2) * 180;
// }
// let burchaklar = 7;
// let ichkiBurchaklar = burchaklarSoni(burchaklar);
// console.log(ichkiBurchaklar);
