// Tanlash operatoriga oid masalalr
// 1-masala
// let kun = Number(prompt("Hafta kunlarini kiriting:"));
let kun = 5;
switch (kun) {
  case 1:
    console.log("Dushanba");
    break;

  case 2:
    console.log("Seshanba");
    break;

  case 3:
    console.log("Chorshanba");
    break;

  case 4:
    console.log("Payshanba");
    break;

  case 5:
    console.log("Juma");
    break;

  case 6:
    console.log("Shanba");
    break;

  case 7:
    console.log("Yakshanba");
    break;

  default:
    console.log("Noto'g'ri kiritdingiz !");
    break;
}

// 2-masala
let baho = 5;
switch (baho) {
  case 1:
    console.log("Yomon");
    break;

  case 2:
    console.log("Qoniqarsiz");
    break;

  case 3:
    console.log("Qoniqarli");
    break;

  case 4:
    console.log("Yaxshi");
    break;

  case 5:
    console.log("A'lo");
    break;

  default:
    console.log("Notugri kiritdingiz !");
    break;
}

// 3-masala
let oy = 12;
switch (oy) {
  case 1:
  case 2:
  case 12:
    console.log("Qish fasli oyi");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Bahor fasli oyi");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Yoz fasli oyi");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Kuz fasli oyi");
    break;

  default:
    console.log("Iltimos oyni tug'ri kiriting !");
    break;
}

// 4-masala
let oy2 = 5;
switch (oy2) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Bu oyda 31 kun bor !");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Bu oyda 30 kun bor !");
    break;

  case 2:
    console.log("Bu oyda 28 kun bor !");
    break;
  default:
    console.log("Notug'ri oy kiritdingiz !");
    break;
}

// 5-masala
let A = 25;
let B = 15;
let amallar = 2;
switch (amallar) {
  case 1:
    console.log("Yig'indis:", A + B);
    break;

  case 2:
    console.log("Ayirmasi:", A - B);
    break;

  case 3:
    console.log("Bo'linmasi:", A / B);
    break;

  case 4:
    console.log("Ko'paytmasi", A * B);
    break;

  default:
    console.log("Iltimos son kiriting!");
    break;
}

// 6-masala
let birlik = 4;
let uzunlik = 2500;

let natija;

switch (birlik) {
  case 1:
    natija = uzunlik * 0.1;
    break;

  case 2:
    natija = uzunlik * 1000;
    break;

  case 3:
    natija = uzunlik;
    break;

  case 4:
    natija = uzunlik * 0.001;
    break;

  case 5:
    natija = uzunlik * 0.01;
    break;

  default:
    console.log("Noto'g'ri birlik kiritildi");
    break;
}

console.log("Kesma uzunligi metrlarda:", natija, "m");

// 7-masala
let birlik2 = 5;
let massa = 50000;
let natija2;

switch (birlik2) {
  case 1:
    natija2 = massa;
    break;

  case 2:
    natija2 = massa * 1000000;
    break;

  case 3:
    natija2 = massa * 1000;
    break;

  case 4:
    natija2 = 1000 * massa;
    break;

  case 5:
    natija2 = 100 * massa;
    break;

  default:
    console.log("Noto'g'ri birlik kiritildi");
    break;
}

console.log("Og'rilik:", natija2, "kg");

// 8-masala
let D = 25;
let M = 12;
let oyKun = 0;

switch (M) {
  case 12:
    oyKun += 31;
  case 11:
    oyKun += 30;
  case 10:
    oyKun += 31;
  case 9:
    oyKun += 30;
  case 8:
    oyKun += 31;
  case 7:
    oyKun += 31;
  case 6:
    oyKun += 30;
  case 5:
    oyKun += 31;
  case 4:
    oyKun += 30;
  case 3:
    oyKun += 31;
  case 2:
    oyKun += 31;
  case 1:
    oyKun += 31;
}

console.log("Yil boshidan", +oyKun + D);

// 9-masala

let D1 = 25;
let M1 = 12;
let kunlar1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let oyNomi1 = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
];
if (M1 >= 1 && M1 <= 12) {
  if (D1 <= kunlar1[M - 1]) {
    switch (M1) {
      case 1:
        console.log(D1 + 1 + "-" + oyNomi1[0]);
        break;
      case 2:
        console.log(D1 + 1 + "-" + oyNomi1[1]);
        break;
      case 3:
        console.log(D1 + 1 + "-" + oyNomi1[2]);
        break;
      case 4:
        console.log(D1 + 1 + "-" + oyNomi1[3]);
        break;
      case 5:
        console.log(D1 + 1 + "-" + oyNomi1[4]);
        break;
      case 6:
        console.log(D1 + 1 + "-" + oyNomi1[5]);
        break;
      case 7:
        console.log(D1 + 1 + "-" + oyNomi1[6]);
        break;
      case 8:
        console.log(D1 + 1 + "-" + oyNomi1[7]);
        break;
      case 9:
        console.log(D1 + 1 + "-" + oyNomi1[8]);
        break;
      case 10:
        console.log(D1 + 1 + "-" + oyNomi1[9]);
        break;
      case 11:
        console.log(D1 + 1 + "-" + oyNomi1[10]);
        break;
      case 12:
        console.log(D1 + 1 + "-" + oyNomi1[11]);
        break;

      default:
        break;
    }
  } else {
    console.log("Noto'g'ri oy kiritdingiz !");
  }
} else {
  console.log("Notug'ri oy kitirdingiz!");
}

// 10-masala
let Y = "j"; // j-janub s-shimol q-sharq g-garb
let K = 2; // 0-harakatlanish, 1-chapga burul, 2-o'ngga burul

switch (Y && K) {
  case "j" && 0:
    console.log("Janubga Harakatlanmoqda");
    break;

  case "j" && 1:
    console.log("Janubga Chapga");
    break;

  case "j" && 2:
    console.log("Janubga O'nga");
    break;

  case "s" && 0:
    console.log("Shimolga Harakatlanmoqda");
    break;

  case "s" && 1:
    console.log("Shimolga Chapga");
    break;

  case "s" && 2:
    console.log("Shimolga O'nga");
    break;

  case "q" && 0:
    console.log("Sharqqa Harakatlanmoqda");
    break;

  case "q" && 1:
    console.log("Sharqqa Chapga");
    break;

  case "q" && 2:
    console.log("Sharqqa O'nga");
    break;

  case "g" && 0:
    console.log("G'arbga Harakatlanmoqda");
    break;

  case "g" && 1:
    console.log("G'arbga Chapga");
    break;

  case "g" && 2:
    console.log("G'arbga O'nga");
    break;

  default:
    console.log("Harakatlanmadi !!!");
    break;
}
