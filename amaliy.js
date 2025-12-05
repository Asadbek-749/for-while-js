// 1. prompt orqali foydalanuvchidan yoshini so'rang,
// agar U 16 yoshdan kichik bo'lsa, "sizga mumkin emas"  deb alert chiqsin, aks holda "xush kelibsiz" desin,
// agar yoshini emas boshqa narsa kiritsa(masalan: 150, -9, salom) yoshni
//  no'to'g'ri kiritding, qayta kirit deb yana prompt chiqsin, va bu safar to'g'ri kiritsa yuqoridagi logika ishlasin.

let yosh;
while (true) {
  yosh = Number(prompt("yoshingizni kiriting:"));

  if (!Number.isInteger(yosh) || yosh <= 0 || yosh >= 100) {
    alert("Noto'g'ri kiritdingiz qayta kiriting !");
    continue;
  }

  if (yosh < 16) {
    alert("Sizga mumkin emas !");
  } else {
    alert("Xush kelibsiz !");
  }
  break;
}

// 2. prompt orqali foydalanuvchidan dekabr oyining kunini kiritishni so'rang, va o'sha kun qaysi hafta
// kuniga to'g'ri kelsa ekranga o'sha hafta kunini chiqaring.
//  masalan 3 kiritsam chorshanba chiqishi kerak, chunki bu yil 3-dekabr chorshanbaga teng. Switch case bilan qilinsin.

let kunn = Number(prompt("Dekabr oyining kunini kiriting:"));
switch (kunn) {
  case 1:
  case 8:
  case 15:
  case 22:
    alert("Dushanba");
    break;
  case 2:
  case 9:
  case 16:
  case 23:
  case 29:
    alert("Seshanba");
    break;
  case 3:
  case 10:
  case 17:
  case 24:
  case 30:
    alert("Chorshanba");
    break;
  case 4:
  case 11:
  case 18:
  case 25:
  case 31:
    alert("Payshanba");
    break;
  case 5:
  case 12:
  case 19:
  case 26:
    alert("Juma");
    break;
  case 6:
  case 13:
  case 20:
  case 27:
    alert("Shanba");
    break;
  case 7:
  case 14:
  case 21:
  case 28:
    alert("Yakshanba");
    break;
  default:
    alert("Noto'g'ri kiritdingiz!");
}

// 3. promptdan foydalanuvchidan yil kiritishini so'rang, va  o'sha foydalanuvchi kiritgan yilgacha bo'lgan kabisa yillarni
//  1 - yildan boshlab chiqarib bering. Masalan 30 kiritsam, consolega 4, 8, 12, 16, 20, 24 lar chiqishi kerak, chunki bular kabisa yillari.
let yil = Number(prompt("Yilni kiriting va kabisa yillarini bilib oling:"));
for (i = yil; i <= 2025; i++) {
  if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
    console.log("Kabisa yillari: " + i);
  }
}
