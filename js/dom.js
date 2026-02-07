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

// Tapşırıq 1:
// Bir düymə yarat. Klik edəndə alert ilə “Salam Dünya” yazısı çıxsın.

// let btn = document.querySelector("button");

// function Hello() {
//     alert ("Salam Dunya");
// }
// btn.addEventListener("click", Hello);

// Tapşırıq 2:
// Bir <p> elementi olsun. Düyməyə klik edəndə həmin mətn “Klik edildi” olsun.

// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// function Klikle() {
//     p.innerHTML = "Klik edildi";
// }
// btn.addEventListener("click", Klikle);

// Tapşırıq 3:
// Bir <div> yaradın. Klik edəndə arxa fon rəngi qırmızı olsun.

// const btn = document.querySelector("button");
// const result = document.querySelector("#result");

// function Color() {
//     result.style.backgroundColor = "red";
// }
// btn.addEventListener("click", Color);


// Tapşırıq 4:
// Bir düymə klik ediləndə <h1> elementinin rəngi mavi olsun.

// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");

// function Blue() {
//     h1.style.color = "blue";
// }
// btn.addEventListener("click", Blue);


// Tapşırıq 5:
// Bir düymə klik ediləndə səhifədəki bir <span> daxilinə cari tarix yazılsın.

// function showDate() {
//     span.textContent = new Date().toLocaleDateString("az-AZ");
//   }
// let btn = document.querySelector("button");
// let span = document.querySelector("#date");
// btn.addEventListener("click", showDate);

// Tapşırıq 6:
// Bir şəkil olsun. Düyməyə klik edəndə şəkil gizlənsin (display: none).

// let btn = document.querySelector("button");
// let image = document.querySelector("img");

// function Image() {
//     if (image.style.display === "none") {
//         image.style.display = "block";
//     }else {
//         image.style.display = "none";
//     }
// }
// btn.addEventListener("click", Image);

// Tapşırıq 7:
// Bir düymə klik ediləndə gizli olan mətn görünsün.

// let btn = document.querySelector("button");
// let text = document.querySelector("#text");

// function showText() {
//     if (text.style.display === "none") {
//         text.style.display = "block";
//     }else {
//         text.style.display = "none";
//     }
// }
// btn.addEventListener("click", showText);

// Tapşırıq 8:
// Bir düymə klik ediləndə <input> daxilində yazılan dəyər alert ilə göstərilsin.

// let btn = document.querySelector("button");
// let input = document.querySelector("#inputText")

// function showValue() {
//     const value = document.getElementById("inputText").value;
//     alert(value);
// }
// btn.addEventListener("click", showValue);

// Tapşırıq 9:
// Bir düymə klik ediləndə səhifədəki bir <p> elementinin ölçüsü böyüsün.

// let btn = document.querySelector("button");
// let text = document.querySelector("#text");

// function increaseSize() {
//     const p = document.getElementById("text");
//     p.style.fontSize = "30px";
// }
// btn.addEventListener("click", increaseSize);

// Tapşırıq 10:
// Bir düymə klik ediləndə konsola “Button clicked” yazılsın.

// let btn = document.querySelector("button");

// function logClick() {
//     console.log("Button clicked");
// }
// btn.addEventListener("click", logClick);

// let nav = document.querySelector("nav");

// function openNav() {
//   nav.style.width = "250px";
// }

// function closeNav() {
//   nav.style.width = "0";
// }
// let btn = document.querySelector("button");
// btn.addEventListener("click", closeNav);

// let test = document.querySelector("#test");
// function openClose() {
//     if (nav.style.width === "250px") {
//         nav.style.width = "0";
//     }else {
//         nav.style.width = "250px";
//     }
// }
// test.addEventListener("click",openClose);

// Mətn dəyişdirən düymə
// Şərtlər:

// Səhifədə:

// bir <p> elementi olsun (məsələn: "Salam Dünya")
// bir <button> olsun ("Dəyiş")
// Button klik olunanda:
// <p>-nin mətni "Mətn dəyişdi" olsun
// <p>-nin rəngi mavi olsun
// Button ikinci dəfə klik olunanda:
// mətn yenidən "Salam Dünya" olsun
// rəng qara olsun
// Heç bir framework istifadə etmə (yalnız pure JS)

// const text = document.getElementById("text");
// const button = document.getElementById("btn");

// let isChanged = false;

// function HelloWorld() {
//     if (!isChanged) {
//         text.innerHTML = "Metn deyisdi";
//         text.style.color = "blue";
//         isChanged = true;
//     }else {
//         text.innerHTML = "Salam Dunya";
//         text.style.color = "black";
//         isChanged = false;
//     }

// }
// button.addEventListener("click",HelloWorld);



// 1 ədəd div (qutu)
// 1 ədəd button

// Funksiya:
// 1️⃣ Səhifə açılanda qutu qırmızı olsun
// 2️⃣ Button-a click ediləndə:
// qutu yaşıl olsun
// 3️⃣ Button-a ikinci dəfə click ediləndə:
// qutu yenidən qırmızı olsun
// 4️⃣ Sonra bu şəkildə davam etsin (toggle)

// const button = document.getElementById("btn");
// const box = document.getElementById("box");

// let isColor = false;

// button.addEventListener("click", function() {
//     if (!isColor) {
//         box.style.backgroundColor = "green";
//         isColor = true;
//     }else {
//         box.style.backgroundColor = "red";
//         isColor = false;
//     }
// })

// Səhifədə:
// 1 ədəd input (məsələn: "Task yaz")
// 1 ədəd button (məsələn: "Əlavə et")
// 1 ədəd ul elementi (task-ları göstərmək üçün)

// Funksiya:
// 1️⃣ İstifadəçi input-a yazır
// 2️⃣ Button click ediləndə:
// input-dakı dəyər ul-də <li> olaraq əlavə olunur
// input boşalanaq
// 3️⃣ Hər <li> yanında “Sil” button olsun
// Sil button click olunanda həmin <li> silinsin

// const input = document.getElementById("taskInput");
// const addBtn = document.getElementById("addBtn");
// const list = document.getElementById("taskList");

// addBtn.addEventListener("click", function() {
//     const taskText = input.value.trim();

//     const li = document.createElement("li");
//     li.innerHTML = taskText;

//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerHTML = "Sil";
//     deleteBtn.style.marginLeft = "10px";

//     deleteBtn.addEventListener("click", function() {
//         li.remove();
//     })

//     li.appendChild(deleteBtn);
//     list.appendChild(li);

//     input.value = "";
// })

// const menuBtn = document.getElementById("menuBtn");
// const navMenu = document.getElementById("navMenu");

// menuBtn.addEventListener("click", function () {

//     if (navMenu.style.display === "block") {
//         navMenu.style.display = "none";
//         return;
//     }

//     navMenu.style.display = "block";

//     if (navMenu.innerHTML === "") {
//         const pages = ["Home", "About", "Services", "Contact"];

//         pages.forEach(page => {
//             const link = document.createElement("a");
//             link.textContent = page;
//             link.href = "#";
//             navMenu.appendChild(link);
//         });
//     }
// });

// 1) Dropdown menyu (Click outside + ESC)
// “Profil” düyməsinə klikləyəndə açılan dropdown menyu

// Tələblər:
// - button → klikdə dropdown aç/bagla.
// - Dropdown açıq olanda:
//   - səhifənin boş yerinə klik → dropdown bağlansın (click outside).
//   - Esc basanda → dropdown bağlansın.
// - Dropdown açıq olanda düyməyə active class ver, bağlananda götür.

// ------------------------------------------------------------

// const btn = document.getElementById("btn");
// const menu = document.getElementById("menu");

// btn.onclick = (e) => {
//     e.stopPropagation();
//     menu.classList.toggle("show");
//     btn.classList.toggle("active");
// }

// document.onclick = () => {
//     menu.classList.remove("show");
//     btn.classList.remove("active");
// }

// document.onkeydown = (e) => {
//     if (e.key === "Escape") {
//         menu.classList.remove("show");
//         btn.classList.remove("active");
//     }
// }

// 2) Sadə form validasiyası + “Draft” yadda saxla
// 2 inputlu form: Ad və Email.

// Tələblər:
// - “Submit” klikdə:
//   - Ad boşdursa → inputun altına error text çıxar, inputa error class ver.
//   - Email “@” yoxdursa → eyni şəkildə error göstər.
// - İstifadəçi yazmağa başlayanda error avtomatik silinsin.
// - İstifadəçi yazdıqca (input event):
//   - dəyərləri sessionStorage-a yaz (draft).
// - Səhifə refresh olanda draft varsa → inputlar dolu gəlsin.

// ------------------------------------------------------------

// const form = document.getElementById("form");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");

// nameInput.value = sessionStorage.getItem("name") || "";
// emailInput.value = sessionStorage.getItem("email") || "";

// form.onsubmit = (e) => {
//     e.preventDefault();

//     let ok = true;

//     if (nameInput.value === "") {
//         nameInput.classList.add("error");
//         nameInput.nextElementSibling.textContent = "Ad bos ola bilmez";
//         ok = false;
//     }

//     if (!emailInput.value.includes("@")) {
//         emailInput.classList.add("error");
//         emailInput.nextElementSibling.textContent = "Email duzgun deyil";
//         ok = false;
//     }

//     if (ok) {
//         alert ("Gonderildi");
//         sessionStorage.clear();
//         form.reset();
//     }
// }

// [nameInput, emailInput].forEach(input => {
//     input.oninput = () => {
//         input.classList.remove("error");
//         input.nextElementSibling.textContent = "";
//         sessionStorage.setItem(input.id, input.value);
//     }
// })

// 3) “Copy” düyməsi (Clipboard + status mesajı)
// Ekranda bir “promo code” text və yanında “Copy” button olmalı

// Tələblər:
// - “Copy” klikdə:
//   - kodu clipboard-a kopyala
//   - düymənin yanında “Copied!” yazısı çıxsın (2 saniyə sonra gizlənsin).
// - Əgər clipboard işləməsə (catch) → “Copy failed” göstər.

// const copyBtn = document.getElementById("copyBtn");
// const promo = document.getElementById("promo");
// const text = document.getElementById("text");

// copyBtn.onclick = () => {

//     navigator.clipboard.writeText(promo.textContent)
//     .then (() => {
//         text.textContent = "Copied";
//         text.style.color = "green";
//         text.classList.add("show");

//         setTimeout (() => {
//             text.classList.remove("show")
//         } ,2000);
//     })

//     .catch (() => {
//         text.textContent = "Copy failed";
//         text.style.color = "red";
//         text.classList.add("show");

//         setTimeout (() => {
//             text.classList.remove("show")
//         }, 2000);
//     })
// }
