// 1. Səhifədə canlı saat göstər. Hər saniyə yenilə və  ekranda cari dəyişim əks olunsun. Stop düyməsi ilə dayandırmaq mümkün olsun. ( new Date, setInterval, setTimeOut )

// const clock = document.getElementById("clock");
// const startBtn = document.getElementById("startBtn");
// const stopBtn = document.getElementById("stopBtn");

// let timerId = null;

// function showTime() {
//     const now = new Date();

//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();


//     clock.innerText = `${hours}:${minutes}:${seconds}`;
// }

// function startClock() {
//     showTime();
//     timerId = setInterval(showTime, 1000);
// }

// stopBtn.addEventListener("click", () => {
//     clearInterval(timerId);
// });


// startClock();


// 2. ⁠Login form yarat və daxilində email və password inputları olsun. Submit olanda boş olub-olmadığını yoxla, əgər düzgündürsə user məlumatını localStorage-a yaz və ekranda “Dashboard” göstər. Login olduqdan 30 saniyə sonra session avtomatik bitsin, alert çıxsın və səhifə reload olsun.

// const loginForm = document.getElementById("loginForm");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const errorText = document.getElementById("error");

// const loginBox = document.getElementById("loginBox");
// const dashboard = document.getElementById("dashboard");

// let sessionTimer = null;

// loginForm.addEventListener("submit", function (e) {
//     e.preventDefault(); 

//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (!email || !password) {
//         errorText.innerHTML = "Bütün sahələri doldurun!";
//         return;
//     }

//     const user = {
//         email: email,
//         loginTime: Date.now()
//     };

//     localStorage.setItem("user", JSON.stringify(user));

//     showDashboard();
//     startSessionTimer();
// });

// function showDashboard() {
//     loginBox.classList.add("hidden");
//     dashboard.classList.remove("hidden");
//     errorText.innerHTML = "";
// }

// function startSessionTimer() {
//     sessionTimer = setTimeout(() => {
//         alert("Session bitdi. Yenidən login olun.");
//         localStorage.removeItem("user");
//         location.reload();
//     }, 30000); 
// }

// Səhifə açılan kimi prompt çıxsın:
// “Adınızı daxil edin:”
// İstifadəçi adını daxil etdikdən sonra:
// alert göstərilsin:
// “Salam, [Ad]!”
// Əgər istifadəçi boş qoysa:
// alert göstərilsin:
// “Ad daxil etmədiniz!”

// const addName = prompt("Adinizi daxil edin");
//  if (addName) {
//     alert (`Salam, ${addName}`);
//  }
//  if (addName == "") {
//     alert ("Ad Daxil etmediniz!");
//  }


// Task: Tarixi və Pəncərə Ölçülərini Göstər
// Bir veb səhifədə iki düymə olsun:
// “Tarixi Göstər”
// “Pəncərə Ölçüsünü Göstər”
// “Tarixi Göstər” düyməsinə klik ediləndə:
// alert() ilə indiki tarixi və vaxtı göstərsin.
// “Pəncərə Ölçüsünü Göstər” düyməsinə klik ediləndə:
// alert() ilə browser pəncərəsinin enini və hündürlüyünü göstərsin.
// Bonus:
// Pəncərə ölçüsünü dəyişəndə console-a console.log("Pəncərə ölçüsü dəyişdi") yazılsın.

// const dataBtn = document.getElementById("dataBtn");
// const windowSize = document.getElementById("windowSize");

// dataBtn.addEventListener("click", function () {
//     const now = new Date();
//     alert(now);
// })

// windowSize.addEventListener("click", function () {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     alert(`${width}px, ${height}px`);
// })
// window.addEventListener("resize", function () {
//     console.log("Pəncərə ölçüsü dəyişdi");
// })

// TASK 1: Scroll mövqeyini yadda saxlamaq (BOM + LocalStorage)
// --------------------------------------------------
// ŞƏRT:
// İstifadəçi səhifəni scroll etdikdə:
// - window.scrollY dəyəri localStorage-da saxlanılsın
// - səhifə reload olduqda həmin scroll mövqeyinə qayıdılsın

// window.addEventListener("scroll", function () {
//     localStorage.setItem("scrollPosition", window.scrollY);
// });

// window.addEventListener("load", function () {
//     const savedScroll = localStorage.getItem("scrollPosition");

// });


//  TASK 4: Modal pəncərəni bir dəfə göstər (DOM + LocalStorage)
// --------------------------------------------------
// ŞƏRT:
// - Modal ilk girişdə açılsın
// - Bağlandıqdan sonra bir daha açılmasın
// ----------------------------------------------

// const modal = document.getElementById("modal");
// const closeBtn = document.getElementById("closeModal");

// const modalShown = localStorage.getItem("modalShown");

// if (!modalShown) {
//     modal.style.display = "flex";
// }

// closeBtn.addEventListener("click", function () {
//     modal.style.display = "none";
//     localStorage.setItem("modalShown", "true");
// });