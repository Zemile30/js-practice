// MASSİV 1 — ƏDƏDLƏR
// -------------------------------------------------

// const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];

// Tapşırıqlar:
// 1. Massivdəki bütün ədədlərin cəmini tapın.

// const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);


// 2. Massivdəki yalnız müsbət ədədləri yeni massivə yığın.

//const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];

// const positiveNumbers = numbers.filter(num => num > 0);

// console.log(positiveNumbers);


// 3. Massivdəki cüt ədədlərin kvadratını hesablayın.

// const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];

// const evenSquares = numbers
//   .filter(num => num % 2 === 0)
//   .map(num => num ** 2);

// console.log(evenSquares);


// 4. Ən böyük və ən kiçik ədədi tapın (Math istifadə edin).

// const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];

// const maxNumber = Math.max(...numbers);  (...numbers → spread operator array-i tək-tək ədədlərə ayırır)
// const minNumber = Math.min(...numbers);

// console.log(maxNumber);
// console.log(minNumber);


// 5. 10-dan böyük ilk ədədi tapın.

// const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];
// const firstNumber = numbers
//     .find(num => num > 10);
// console.log(firstNumber);

// 6. Mənfi ədədlərin sayını tapın.

// const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];

// const negativeCount = numbers.filter(num => num < 0).length;

// console.log(negativeCount); 



// 7. Massivdəki ədədlərin orta qiymətini hesablayın.



// 8. Bütün ədədlərin müsbət olub-olmadığını yoxlayın.- every()
// 9. Massivdə 0-ın olub-olmadığını tapın.-some()

// 10. Ədədləri artan sıra ilə düzün.

// const numbers = [12, -5, 8, 0, 21, 4, -9, 16, 7, 3];

// numbers.sort((a, b) => a - b);

// console.log(numbers);



// -------------------------------------------------
// MASSİV 2 — İSTİFADƏÇİLƏR
// -------------------------------------------------

const users = [
  { id: 1, name: "Ali", age: 17, salary: 600 },
  { id: 2, name: "Nigar", age: 24, salary: 1200 },
  { id: 3, name: "Murad", age: 30, salary: 900 },
  { id: 4, name: "Aysel", age: 19, salary: 750 },
  { id: 5, name: "Kamran", age: 16, salary: 400 }
];

// Tapşırıqlar:
// 1. Yaşı 18-dən böyük olan user-ləri seçin.

// const filteredUsers = users.filter((item)=>item.age > 18);
// console.log (filteredUsers);

// 2. Bütün user adlarını array şəklində çıxarın.

// const mapUsers = users.map((item)=> item.name);
// console.log(mapUsers);

// 3. Ən yüksək maaş alan user-i tapın.
// const sortUsers = users.sort((item1,item2)=> item2.salary - item1.salary);
// console.log(sortUsers[0].name);

// 4. User-lərin orta yaşını hesablayın.
// const usersAge = users.map((item)=> item.age);
// console.log(usersAge);
// let sum =0;
// for(i=0; i < usersAge.length;i++){
//     sum += usersAge[i]
// }
// console.log(sum);
// const usersLength = users.length;
// console.log(usersLength);
// const Avarage = sum / usersLength;
// console.log(Avarage);

// 5. Maaşı 800-dən az olan user-ləri silin.
// const usersSalary = users.filter((item)=> item.salary < 800);
// console.log(usersSalary);

// 6. id-si 3 olan user-i tapın.

// const usersId = users.find((item)=>item.id == 3);
// console.log(usersId);

// 7. Bütün maaşların cəmini hesablayın.

// const usersSalary = users.map((item)=>item.salary);
// console.log(usersSalary);
// let sum = 0;
// for(i = 0; i < usersSalary.length; i++){
//     sum += usersSalary[i];
// }
// console.log(sum);

// 8. User-lərin maaşlarını 10% artırın.

// const increase = users.map((item)=>(item.salary * 0.1)+ item.salary);
// console.log(increase);

// 9. Ən gənc user-i tapın.

// const usersAge = users.sort((item1,item2)=> item1.age - item2.age);
// console.log(usersAge[0]);

// 10. Maaşı 1000-dən böyük olan user varmı?

// const usersSalary = users.filter((item)=> item.salary > 1000);
// console.log(usersSalary);

// -------------------------------------------------
// MASSİV 3 — ƏMƏLİYYATLAR
// -------------------------------------------------

const transactions = [
  { amount: 200, type: "income" },
  { amount: 150, type: "expense" },
  { amount: 400, type: "income" },
  { amount: 100, type: "expense" },
  { amount: 50, type: "expense" }
];

// Tapşırıqlar:
// 1. Ümumi gəliri (income) hesablayın.

// const totalIncome = transactions.filter((item)=>item.type === "income");
// let sum = 0;
// for (i=0; i < totalIncome.length; i++) {
//     sum += totalIncome[i].amount;
// }
// console.log(sum);

// 2. Ümumi xərci (expense) hesablayın.

// const totalExpence = transactions.filter((item)=>item.type === "expense");
// let sum = 0;
// for (i=0; i < totalExpence.length; i++) {
//     sum += totalExpence[i].amount;
// }
// console.log(sum);

// 3. Yekun balansı tapın (gəlir - xərc).

// const totalIncome = transactions.filter((item)=>item.type === "income");
// let sum1 = 0;
// for (i=0; i < totalIncome.length; i++) {
//     sum1 += totalIncome[i].amount;
// }
// console.log(sum1);

// const totalExpence = transactions.filter((item)=>item.type === "expense");
// let sum2 = 0;
// for (i=0; i < totalExpence.length; i++) {
//     sum2 += totalExpence[i].amount;
// }
// console.log(sum2);

// const difference = sum1 - sum2;
// console.log(difference);

// 4. Ən böyük əməliyyatı tapın.

// const maxTransaction = transactions.sort((item1,item2)=> item2.amount - item1.amount);
// console.log(maxTransaction[0]);

// 5. Xərc əməliyyatlarının sayını tapın.

// const countExpense = transactions.filter((item)=> item.type === "expense").length;
// console.log(countExpense);

// 6. Yalnız gəlir məbləğlərini massivə yığın.

// const incomeAmounts = transactions
//   .filter(item => item.type === "income")
//   .map(item => item.amount);

// console.log(incomeAmounts);

// 7. Bütün məbləğlərin orta qiymətini tapın.

// let sum = 0;

// for (let i = 0; i < transactions.length; i++) {
//   sum += transactions[i].amount;
// }

// const average = sum / transactions.length;

// console.log(average);

// 8. 300-dən böyük əməliyyat varmı?

// const hasGreaterThan300 = transactions.some(
//   item => item.amount > 300
// );

// console.log(hasGreaterThan300);

// 9. Əməliyyatları məbləğə görə artan sıra ilə düzün.

// transactions.sort((a, b) => a.amount - b.amount);

// console.log(transactions);

// 10. type üzrə qruplaşdırma aparın.

// -------------------------------------------------
// MASSİV 4 — RİYAZİ ƏMƏLİYYATLAR
// -------------------------------------------------

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// Tapşırıqlar:
// 1. Bütün ədədləri yuxarı yuvarlaqlaşdırın (Math.ceil).

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const roundedUp = values.map(num => Math.ceil(num));

// console.log(roundedUp);

// 2. Bütün ədədləri aşağı yuvarlaqlaşdırın (Math.floor).

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const roundedDown = values.map(num=>Math.floor(num));

// console.log(roundedDown);

// 3. Ən yaxın tam ədədi tapın (Math.round).

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const nearNumber = values.map(num=>Math.round(num));

// console.log(nearNumber);

// 4. Ən böyük ədədi Math.max ilə tapın.

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const roundeMax = Math.max(...values);

// console.log(roundeMax);

// 5. Ən kiçik ədədi Math.min ilə tapın.

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const roundeMin = Math.min(...values);

// console.log(roundeMin);

// 6. Hər ədədin kvadrat kökünü hesablayın.

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const squareRoots = values.map(num => Math.sqrt(num));

// console.log(squareRoots);

// 7. Bütün ədədləri 2 onluq mərtəbəyə yuvarlaqlaşdırın.

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const roundedTwo = values.map(num => Number(num.toFixed(2)));

// console.log(roundedTwo);


// 8. Təsadüfi bir indeks seçib massivdən element çıxarın.
// 9. Ədədlərin cəmini Math və reduce ilə hesablayın.
// 10. Ən böyük ilə ən kiçik ədədin fərqini tapın.

// const values = [2.3, 4.7, 9.1, 3.5, 6.8];

// const maxValue = Math.max(...values);
// const minValue = Math.min(...values);

// const difference = maxValue - minValue;

// console.log(difference);


