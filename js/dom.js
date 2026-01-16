// const myVariable = document.querySelectorAll("li");
// console.log(myVariable, "my variable");

// for (let i = 0; i < myVariable.length; i++) {
//   myVariable[i].style.color = "red";
//   myVariable[i].style.backgroundColor = "yellow";
//   myVariable[i].style.marginBottom = "10px";
// }

// function salam() {
//   alert("salam olsun");
// }

// const btn = document.querySelector("button");

// btn.addEventListener("dblclick", salam);

// p.innerHTML = "Hello World!";


// 1. Button-a click edəndə text dəyişsin

// Task:
// Button-a click edəndə <p> elementinin text-i “Salam Dünya” olsun.

// const btn = document.querySelector("button");
// const p = document.querySelector("p");

// function Hello() {
//     p.innerHTML = "Salam Dunya";
// }
// btn.addEventListener ("click", Hello);


// 2. Button click → background rəngi dəyişsin
// Task:
// Button-a click edəndə body-nin background rəngi dəyişsin.

// const btn = document.querySelector("button");
// const body = document.querySelector("body");

// function Color() {
//     body.style.backgroundColor = "red"
// }
// btn.addEventListener("click", Color);

// 3. Input-dan dəyər oxu və göstər
// Task:
// Input-a yazılan mətni button click zamanı <div> içində göstər.

// let btn = document.querySelector("button");
// let input = document.querySelector("#inputText");
// let result = document.querySelector("#result");

// function inputVal() {
//     result.innerHTML = input.value;
// }
// btn.addEventListener ("click", inputVal);

// 4. Elementi gizlət / göstər
// Task:
// Button-a click edəndə bir <div> gizlənsin, növbəti click-də yenə görünsün.

// let btn = document.querySelector("button");
// let box = document.querySelector("#box");

// function Hidden() {
//     if (box.style.display === "none") {
//         box.style.display = "block";
//     }else {
//         box.style.display = "none";
//     }
// }
// btn.addEventListener ("click", Hidden);

// 5. Class əlavə et / sil
// Task:
// Button click zamanı elementə active class-ı əlavə et, yenidən click-də sil.

// let btn = document.querySelector("button");
// let box = document.querySelector(".box");

// function Delete() {
//     box.classList.toggle("active");
// }
// btn.addEventListener ("click", Delete);

// 6. List-ə yeni element əlavə et
// Task:
// Input-a yazılan dəyəri button click zamanı <ul>-ə <li> kimi əlavə et.

// let btn = document.querySelector("button");
// let input = document.querySelector("#inputText");
// let list = document.querySelector("#list");

// function Add() {
//     let li = document.createElement("li");
//     li.innerText = input.value;
//     list.appendChild(li);
//     input.value = "";
// }
// btn.addEventListener("click", Add);

// 7. Elementi sil
// Task:
// List-dəki hər elementin yanında “Sil” button-u olsun, click edəndə həmin <li> silinsin.

// let btn = document.querySelector("button");
// let input = document.querySelector("#inputText");
// let list = document.querySelector("#list");

// btn.addEventListener("click", function () {
//       let li = document.createElement("li");
//       li.innerText = input.value;

//       let deleteBtn = document.createElement("button");
//       deleteBtn.innerText = "Sil";

//       deleteBtn.addEventListener("click", function () {
//         li.remove();
//       });

//       li.appendChild(deleteBtn);
//       list.appendChild(li);

//       input.value = "";
//     });


// 8. Counter (sayğac)
// Task:
// “+” button-u click edildikcə rəqəm artsın,
// “–” button-u click edildikcə azalsın.

// let minusBtn = document.getElementById("minus");
// let plusBtn = document.getElementById("plus");
// let countEl = document.getElementById("count");

// let count = 0;

// plusBtn.addEventListener("click", function () {
//     count++;
//     countEl.innerText = count;
// });

// minusBtn.addEventListener("click", function () {
//     count--;
//     countEl.innerText = count;
// });

// 9. Click olunan elementin text-ni alert et
// Task:
// Bir neçə button olsun, hansına click edilsə onun text-i alert ilə göstərilsin.

// let buttons = document.querySelectorAll(".btn");

// buttons.forEach(function (btn) {
//     btn.addEventListener("click", function () {
//         alert(this.innerText);
//     });
// });
