// const responce = Number(prompt('yasinizi daxil edin'));
// if (responce > 20) {
//     alert('sizin yasiniz 20den boyukdur');
// } else if (responce === 20) {
//     alert('sizin 20 yasiniz var');
// } else {
//     alert('sizin yasiniz 20den kicikdir');
// }
// Daxil edilən rəqəmin müsbət, mənfi və ya sıfır olduğunu yoxla, əgər müsbətdirsə tək və cüt olduğunu da yoxla.
// İstifadəçidən bir rəqəm daxil etməsini istəyin.
// •	Əgər rəqəm müsbətdirsə, konsolda yazılsın: "10 müsbət və cüt rəqəmdir".
// •	Əgər mənfidirsə: "-5 mənfi rəqəmdir".
// •	Əks halda, "0 neytral rəqəmdir".
// const nmb = Number(prompt('reqem daxil edin'));
// if ((nmb > 0) && (nmb % 2 == 0)) {
//     alert(`${nmb} musbet ve cut reqemdir`)
// } else if ((nmb < 0)) {
//     alert(`${nmb}menfi reqemdir`);
// } else if (nmb == 0) {
//     alert(`${nmb} neytral reqemdir`);
// } else {
//     alert(`${nmb} musbet ve tek reqem`)
// }
// Parol doğrulama
// İstifadəçidən bir parol daxil etməsini istəyin.
// •	Əgər parol 12345-ə bərabərdirsə → "Parol düzgündür".
// •	Əks halda → "Yanlış parol daxil etdiniz".

// const password = Number (prompt ('parol daxil edin'));
// if (password == 12345) {
//     alert ('parol duzgundur');
// }else {
//     alert ('parol yalnisdir');
// }
// Daxil edilən rəqəmin 3-ə və ya 5-ə bölünməsini yoxla
// İstifadəçidən bir rəqəm daxil etməsini istəyin.
// •	Əgər rəqəm həm 3-ə, həm də 5-ə bölünürsə → "Rəqəm həm 3-ə, həm də 5-ə bölünür".
// •	Yalnız 3-ə bölünürsə → "Rəqəm yalnız 3-ə bölünür".
// •	Yalnız 5-ə bölünürsə → "Rəqəm yalnız 5-ə bölünür".
// •	Əks halda → "Rəqəm nə 3-ə, nə də 5-ə bölünür"
// const nmb = Number (prompt ('reqem daxil edin'));
// if ((nmb % 3 == 0) && (nmb % 5 == 0)) {
//     alert ('"Rəqəm həm 3-ə, həm də 5-ə bölünür');
// }else if ((nmb % 3 == 0)) {
//     alert ('reqem yalniz 3e bolunur');
// }else if (nmb % 5 == 0) {
//     alert ('reqem yalniz 5e bolunur');
// }else {
//     alert ('reqem ne 3e nede 5e bolunur');
// }

// Ayın fəsilini müəyyən et
// İstifadəçidən bir ay daxil etməsini istəyin.
// •	Switch/Case istifadə edərək:
// o	Yanvar, Fevral, Dekabr → "Qış fəslidir"
// o	Mart, Aprel, May → "Yaz fəslidir"
// o	İyun, İyul, Avqust → "Yay fəslidir"
// o	Sentyabr, Oktyabr, Noyabr → "Payız fəslidir"
// o	Yanlış daxil edilibsə → "Belə bir ay yoxdur".

// let ayAdi = prompt("Ayın adını daxil edin:");

// ayAdi = ayAdi.toLowerCase();

// let ayIndex;

// switch (ayAdi) {
//   case "yanvar":
//     ayIndex = 0;
//     break;
//   case "fevral":
//     ayIndex = 1;
//     break;
//   case "mart":
//     ayIndex = 2;
//     break;
//   case "aprel":
//     ayIndex = 3;
//     break;
//   case "may":
//     ayIndex = 4;
//     break;
//   case "iyun":
//     ayIndex = 5;
//     break;
//   case "iyul":
//     ayIndex = 6;
//     break;
//   case "avqust":
//     ayIndex = 7;
//     break;
//   case "sentyabr":
//     ayIndex = 8;
//     break;
//   case "oktyabr":
//     ayIndex = 9;
//     break;
//   case "noyabr":
//     ayIndex = 10;
//     break;
//   case "dekabr":
//     ayIndex = 11;
//     break;
//   default:
//     console.log("Belə bir ay yoxdur");
// }

// if (ayIndex !== undefined) {
//   let tarix = new Date(2025, ayIndex);
//   let ay = tarix.getMonth();

//   switch (ay) {
//     case 11:
//     case 0:
//     case 1:
//       console.log("Qış fəslidir");
//       break;

//     case 2:
//     case 3:
//     case 4:
//       console.log("Yaz fəslidir");
//       break;

//     case 5:
//     case 6:
//     case 7:
//       console.log("Yay fəslidir");
//       break;

//     case 8:
//     case 9:
//     case 10:
//       console.log("Payız fəslidir");
//       break;
//   }
// }


// Həftənin günlərinin vaxt bölgüsü
// İstifadəçidən həftənin bir gününü daxil etməsini istəyin.
// •	Əgər daxil edilən gün "bazar ertəsi" və ya "çərşənbə axşamı" və ya "çərşənbə" və ya "cümə axşamı" və ya "cümə"dirsə → Konsolda yaz: "İş günüdür".
// •	Əgər "şənbə" və ya "bazar" → "Həftəsonudur".
// •	Yanlış daxil edilibsə → "Daxil etdiyiniz gün yanlışdır".

// let day = prompt("Həftənin bir gününü daxil edin:");

// day = day.toLowerCase();

// switch (day) {
//   case "bazar ertəsi":
//   case "çərşənbə axşami":
//   case "çərşənbə":
//   case "cümə axşami":
//   case "cümə":
//     console.log("İş günüdür");
//     break;

//   case "şənbə":
//   case "bazar":
//     console.log("Həftəsonudur");
//     break;

//   default:
//     console.log("Daxil etdiyiniz gün yanlisdir");
// }

// Restoranın ümumi gəliri
//  İstifadəçidən gündəlik neçə müştəri xidmət etdiyini və hər müştəridən orta hesabla nə qədər  qazandığını soruşun. (prompt )
// •	Gündəlik gəlir = Müştəri sayı × Qazanc
// •	Həftəlik gəlir = Gündəlik gəlir × 5
// •	Aylıq gəlir = Həftəlik gəlir  × 4
// Konsolda bütün bu gəlirləri ayrı-ayrılıqda göstərin. 

// let musteriSayi = Number(prompt("Gündəlik neçə müştəriyə xidmət edirsiniz?"));
// let qazanc = Number(prompt("Hər müştəridən orta hesabla nə qədər qazanirsiniz?"));

// let gunlukGelir = musteriSayi * qazanc;
// let heftelikGelir = gunlukGelir * 5;
// let ayliqGelir = heftelikGelir * 4;

// console.log("Gündəlik gəlir: " + gunlukGelir);
// console.log("Həftəlik gəlir: " + heftelikGelir);
// console.log("Ayliq gəlir: " + ayliqGelir);


// 
// Riyazi ortalama hesablanması
// •	İstifadəçidən neçə ədəd daxil edəcəyini soruşun. Daha sonra həmin ədədləri bir-bir daxil etməsini istəyin.
// •	Hər bir ədədin cəmini tapın və daxil edilən ədədlərin ortalamasını hesablayın.
// •	Məsələn: 3 ədəd daxil edilibsə: 5, 10, 15 → Ortalama = (5 + 10 + 15) / 3 = 10.



// Şagirdin qiymətini müəyyənləşdir
// İstifadəçidən bir qiymət daxil etməsini istəyin (0-100 arası).
// •	Əgər qiymət 90-dan çoxdursa → "A aldı"
// •	70-90 arasıdırsa → "B aldı"
// •	50-70 arasıdırsa → "C aldı"
// •	30-50 arasıdırsa → "D aldı"
// •	Əks halda → "F aldı".

// const price = Number (prompt ("Qiymeti daxil edin (0-100)"));

// if ((price > 90) && (price <= 100)) {
//     console.log ("A aldi");
// }else if ((price >= 70) && (price <= 90)) {
//     console.log ("B aldi");
// }else if ((price >= 50) && (price < 70)) {
//     console.log ("C aldi");
// }else if ((price >= 30) && (price < 50)) {
//     console.log ("D aldi");
// }else {
//     console.log ("F aldi")
// }



// Functions

// •	 Bir funksiya yaradin, bu funksiya 2 parametr alsin. Bu ededlerin ededi ortasini tapsin ve konsola yazdirsin.

// const myFunc = (a,b) => {
//     let result = (a + b) / 2;
//     console.log (`ededlerin ededi ortasi ${result}`);
// }
// myFunc (10,6)

// •	 Bir funksiya yaradin, aldigi parametr string tipindedirse konsola bu deyer string tipindedir eks halda string tipinde deyil cixartsin.

// function stringCheck(parametr) {
//   if (typeof parametr === "string") {
//     console.log("Bu dəyər string tipindədir");
//   } else {
//     console.log("String tipində deyil");
//   }
// }
// stringCheck("salam");
// stringCheck (123);

// •	Bir funksiya yaradin, parametr olaraq sizin adinizi alsin. Konsola  meselen "Salam Nermin" cixartsin.

// const hello = (name) => {
//   console.log(`Salam ${name}`);
// };

// hello("Nermin");

// •	Bir string tipinde deyisken yaradin, eger bu deyiskenin uzunlugu 6 dan boyukdurse onu dondursun ve herflerini ekrana cixartsin eks halda daha minimal uzunluq 6 olmalidir yazsin. Bu proses es6 function daxilinde eks etdirilsin.


// •	Bir ədədi yoxlayan funksiya: təkdirsə "Təkdir", cütdürsə "Cütdür" yazsın.

// const check = (num) => {
//   if (num % 2 === 0) {
//     console.log("Cütdür");
//   } else {
//     console.log("Təkdir");
//   }
// };
// check(5);
// check(6);

// •	Istediyiniz loopdan istifade ederek vurma cedveli hazirlayin. Ic ice loop yeni ic ice donguden ist edeceksiz. Meselen for icinde for

// •	Elementleri istenilen tipde olan bir array yaradin (boolean, string, number). Bu arrayin yalniz string tipinde olan elementlerini ekrana yazdirin.


// •	Ele bir funksiya yazin ki, daxil edilen sozu parametr olaraq alsin ve tersine cevirsin ( Salam = malas ). Bunuda dom vasitesile ekrana cixardin.

// •	2 ededi parametr olaraq alan ve muqayise edib, en kiciyini qaytaran funksiya yazin

// function smaller(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(smaller(5, 10));

// const num = Number (prompt("Eded daxil edin:"));
// if (num > 0) {
//     console.log ("musbet ededdir");
// }else if (num < 0) {
//     console.log ("menfi ededdir");
// }else {
//     console.log ("o neytral ededdir");
// }

// const checkAge = age => {
//     if ((age > 0) && (age < 18)) {
//         console.log ("Usaq");
//     }else if ((age >= 18) && (age <= 64)) {
//         console.log ("Yetkin");
//     }else if (age >= 65) {
//         console.log ("Teqaudcu");
//     }else {
//         console.log ("bele yas ola bilmez");
//     }

// }
// checkAge (16);

// const examResult = score => {
//     if ((score > 0) && (score < 50)) {
//         console.log("Kesildin");
//     }else if ((score >= 50) && (score < 70)) {
//         console.log ("orta");
//     }else if ((score >=70) && (score < 90)) {
//         console.log ("yaxsi");
//     }else if ((score >= 90) && (score <= 100)) {
//         console.log ("ela");
//     }
// }
// examResult (100);

// const calculator = (a, b, operator) => {
//     switch (operator) {
//         case "+":
//             return (a + b);
//         case "-":
//             return (a - b);
//         case "*":
//             return (a * b);
//         case "/":
//             if (b === 0) {
//                 return ("o-a bolmek olmaz");
//             } else {
//                 return (a / b);
//             }
//         default:
//             return ("yalnis operator");
//     }
// }

// const orderPrice = (product, quantity) => {
//     if (quantity <= 0) {
//         console.log ("Yalnis miqdar");
//     }
//     let price;
//     switch (product) {
//         case "book":
//             price = 5;
//             break;
//         case "pen":
//             price = 2;
//             break;
//         case "notebook":
//             price = 10;
//             break;
//         default:
//             console.log ("mehsul tapilmadi");
//     }
//     console.log (price * quantity);
// }   
// orderPrice ("pen",8);
