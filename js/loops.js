// 1.	1-dən 20-yə qədər ədədləri 2-2 artan sırada düzün və 10-16 arasını döngüdən çıxarın.

// for (let a = 1; a <= 20; a+=2) {
//     if (a >=10 && a <= 16) {
//         continue;
//     }
//     console.log(a);
// }

// 2.	Bir funksiya yaradın, 2 parametr alsın və bu parametrlər istifadəçinin ad və soyadı olsun. Siz funksiyaya parametr göndərdikdən sonra konsolda Hello ad soyad yazılsın.

// function salamla(name, surname) {
//   console.log("Hello " + name + " " + surname);
// }

// salamla("Zamila", "Abbasova");

// 3.	Tərkibində yalnız adlar olan bir array yaradın, konsolda hər bir ad qarşısında Hello yazılsın.

// const adlar = ["Zemile", "Eziz", "Sahib", "Ebulfet"];
// for (i=0; i < adlar.length; i++) {
//     console.log ("Hello" + " " + adlar[i]);
// }

// 4.	Tərkibində ədədlər olan bir array yaradın, bu array daxilindəki ədədlərin cəmini tapın.

// let num = [5,8,10,30,40];
// let sum = 0;

// for (i=0; i < num.length; i++) {
//     sum += num[i];
// }
// console.log(sum);


// 5.	Daxilində yalnız number olan bir array yaradın, bu arrayin elementlərinin uzunluğunu tapın. Məsələn, 210 ədədi 3 rəqəmlidir.

// let numbers = [5, 23, 210, 7, 1024];

// for (let i = 0; i < numbers.length; i++) {
//   let length = numbers[i].toString().length;
//   console.log(numbers[i] + " → " + length);
// }


// 6.	const frontendLanguages = ["HTML", "CSS", "JavaScript", "React"];
// Bu arrayin hər bir elementini konsola yazdırın (for in və ya for of ilə).

// const frontendLanguages = ["HTML", "CSS", "JavaScript", "React"];

// for (let language of frontendLanguages) {
//   console.log(language);
// }


// 7.	Ədədin kvadratını hesablayan bir funksiya yazın.

// const kvadrat = num => num * num;

// console.log(kvadrat(8));


// 8.	Elə bir funksiya yaradın ki, tərkibində həm loop, həm də if-else işlədilsin (sizə qalıb, necə istəsəniz buna uyğun məsələ qurun).Array daxilindeki cut ve tek reqemleri ayirin ve consola yazdirin.

// function cutTekAyir(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       console.log(num[i] + " cütdür");
//     } else {
//       console.log(num[i] + " təkdir");
//     }
//   }
// }
// cutTekAyir([3, 8, 11, 20, 7]);


// 9.	Düzbucaqlının perimetrini hesablayan funksiya yazın. Və bu perimetr başqa bir dəyişkənə ötürülə bilsin.

// let perimetr = (a,b) => (a + b) * 2;

// console.log(perimetr(5,8));


// 10.	 1-dən 20-yə qədər olan ədədlərin tək və cüt olaraq ayrı-ayrılıqda cəmini hesablayın. (məsələn, tək ədədlərin cəmi: 120, cüt ədədlərin cəmi: 213).

// let tekCem = 0;
// let cutCem = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     cutCem += i;
//   } else {
//     tekCem += i;
//   }
// }

// console.log("Tək ədədlərin cəmi:", tekCem);
// console.log("Cüt ədədlərin cəmi:", cutCem);


// 11.	 20-dən 40-a qədər ədədləri döngüyə salın, 28-ə çatdıqda döngü dayansın (break).

// for (let i = 20; i <= 40; i++) {
//   if (i === 28) {
//     break;
//   }
//   console.log(i);
// }


// 12.	 1 -dən 10-a qədər ədədləri sıralayın, 8-ə çatdıqda dayansın, sonra yenidən davam etsin (continue).

// for (let i = 1; i <= 10; i++) {
//     if (i === 8) {
//         continue;
//     }
//     console.log(i);
// }


// 13.	 arr = [13,23,12,45,22,48,66,100] arrayini döngüyə salın, ekrana yalnız cüt ədədləri çıxarsın.

// let arr = [13,23,12,45,22,48,66,100];

// for(i=0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log (arr[i]);
//     }

// }

// 14.	 0-dan 100-ə qədər tək ədədləri ekrana çıxarın (continue istifadə edin).

// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }


// 15.	 Elə bir döngü yazın ki, ekrana 5 dəfə "Hello" yazsın.

// for (let i = 0; i < 5; i++) {
//   console.log("Hello");
// }


// 16.	 1-dən 10-a qədər ədədlərin hər birinin kvadratını tapın.

// for (let i = 1; i <= 10; i++) {
//   console.log((i * i));
// }


// 17.	 20-dən azalan istiqamətdə bütün müsbət ədədləri sıralayın, 5 və 10 arasını yazdırmasın.

// for (let i = 20; i > 0; i--) {
//   if (i >= 5 && i <= 10) {
//     continue;
//   }
//   console.log(i);
// }


// 18.	 50 və 60 arasında olan bütün ədədlərin cəmini tapın.

// let sum = 0;
// for (i =50; i <=60; i++){
//     sum += i;
// }
// console.log(sum);


// 19.	1-dən 50-yə qədər ədədləri 2-2 artan sırada düzün, 40-a çatanda döngü dayansın və yenidən davam etsin.

// for (i = 1; i <=50; i+=2) {
//     if (i === 40) {
//         continue;
//     }
//     console.log(i);
// }


// 20.	1-dən 30-a qədər ədədləri ekrana çıxarın, yalnız tək ədədləri yazdırın.

// for (i = 1; i < 30; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log (i);
// }

// 21.	10-dan 1-ə qədər geriyə doğru hər ədədin kvadratını ekrana çıxarın.

// for (i=10; i > 1; i--) {
//     console.log (i * i);
// }

// 22.	İstifadəçi tərəfindən daxil edilən ədədin faktorialını tapmaq üçün bir döngü yazın.

// let eded = Number(prompt("Bir ədəd daxil edin:"));
// let faktorial = 1;

// for (let i = 1; i <= eded; i++) {
//   faktorial *= i;
// }

// console.log(eded + "! = " + faktorial);


// 23.	1-dən 50-yə qədər olan ədədlər arasında yalnız 3-ə və ya 5-ə bölünənləri ekrana çıxarın.

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }


// 24.	Bir array yaradın, tərkibindəki yalnız mənfi ədədləri konsola çıxaran döngü yazın.

// let arr = [-5, 8, -19, 20, -30, 50];

// for (i=0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         console.log(arr[i]);
//     }
// }

// 25.	İstifadəçi tərəfindən daxil edilən iki ədədin arasında olan bütün ədədləri konsola çıxarın.

// let eded1 = Number(prompt("Birinci ədədi daxil edin:"));
// let eded2 = Number(prompt("İkinci ədədi daxil edin:"));

// if (eded1 < eded2) {
//   for (let i = eded1 + 1; i < eded2; i++) {
//     console.log(i);
//   }
// } else if (eded1 > eded2) {
//   for (let i = eded1 - 1; i > eded2; i--) {
//     console.log(i);
//   }
// } else {
//   console.log("Daxil edilən ədədlər bərabərdir, arada ədəd yoxdur.");
// }


// 26.	Bir array yaradın, hər bir elementin uzunluğunu (stringdirsə simvol sayı, numberdirsə rəqəm sayı) ekrana çıxaran döngü yazın.

// let arr = ['hello', 15, 1258, 'hi'];

// for (i=0; i < arr.length; i++) {
//     let length = arr[i].toString().length;
//     console.log (arr[i] + "-> " + length);
// }

// 27.	1-dən 20-yə qədər olan ədədlərin hasilini hesablayan bir döngü qurun.

// let product = 1;

// for (let i = 1; i <= 20; i++) {
//   product *= i;
// }

// console.log(product);


// 28.	Bir array tərtib edin, yalnız cüt indekslərdəki elementləri ekrana çıxaran bir döngü yazın.

// let arr = ["alma", "armud", "banan", "gilas", "kivi", "nar"];

// for (let i = 0; i < arr.length; i++) {
//   if (i % 2 === 0) {
//     console.log(arr[i]);
//   }
// }


// 29.	Bir array tərtib edin və yalnız string tipli elementləri konsola çıxaran bir döngü yazın.

// let arr = ["apple", "bananas", 15, 16, 18, "kiwi"];

// for (i=0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log (arr[i]);
//     }
// }

// 30.	1-dən 100-ə qədər olan bütün ədədləri döngü ilə yoxlayın və yalnız tam kvadrat olan ədədləri konsola çıxarın (məsələn, 4, 9, 16 və s.).

// for (let i = 1; i <= 100; i++) {
//   let sqrt = Math.sqrt(i);

//   if (Number.isInteger(sqrt)) {
//     console.log(i);
//   }
// }


// 31.	Bir array yaradın, içində olan bütün elementləri geriyə doğru konsola yazdıran bir döngü qurun.

// let arr = ["HTML", "CSS", "JavaScript", "React", "Node"];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }


// 32.	1-dən 50-yə qədər olan ədədləri döngü ilə ekrana yazdırın, yalnız hər üçüncü ədədin qarşısında "üçüncü" yazısı olsun.

// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i + " üçüncü");
//   } else {
//     console.log(i);
//   }
// }

// 33.	1-dən 100-ə qədər olan ədədləri döngü ilə ekrana çıxarın, ancaq ədədlərdən 40 və 70 arasında olanları döngüdən çıxarın (continue istifadə edin).

// for (i =1; i < 100; i++) {
//     if (i >= 40 && i <= 70) {
//         continue;
//     }
//     console.log (i);
// }

// 34.	Bir array yaradın, hər elementin kvadratını tapan və yeni arrayə əlavə edən bir döngü yazın.

// let numbers = [2, 4, 6, 8, 10];
// let squaredNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   squaredNumbers.push(numbers[i] * numbers[i]);
// }

// console.log(squaredNumbers);


// 35.	1-dən 30-a qədər ədədlər arasında yalnız həm 2-ə, həm də 3-ə bölünənləri konsola çıxarın.

// for (i=1; i < 30; i++) {
//     if (i % 2 === 0 && i % 3 === 0) {
//         console.log (i);
//     }
// }

// 36.	Bir array yaradın və yalnız ilk cüt 3 elementi konsola çıxaran bir döngü yazın.

// let numbers = [1, 2, 4, 5, 6, 8, 3, 10];

// let count = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//     count++;

//     if (count === 3) {
//       break;
//     }
//   }
// }

// 37.	Bir array yaradın, içində olan hər bir stringi böyük hərflərlə ekrana çıxaran döngü qurun.

// let arr = ["alma", "armud", "banan", "gilas"];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     console.log(arr[i].toUpperCase());
//   }
// }

// 38.	Bir array yaradın, elementləri nömrələyərək ("1. Element: ..." kimi) konsola yazdıran bir döngü qurun.

// let arr = ["alma", "armud", "banan", "gilas"];

// for (let i = 0; i < arr.length; i++) {
//   console.log((i + 1) + ". Element: " + arr[i]);
// }

// 39.	Bir array yaradın və yalnız elementlərin qiyməti 10-dan böyük olduqda konsola çıxaran bir döngü qurun.

// let arr = [5, 8, 10, 18, 25, 45, 65];

// for (i=0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//         console.log (arr[i]);
//     }
// }