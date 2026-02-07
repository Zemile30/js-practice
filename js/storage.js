// 1. **localStorage-da istifadəçi adı saxlamaq**  
//    - **Tapşırıq**: İstifadəçi adı daxil etmək üçün bir HTML forması yaradın və "Yadda saxla" düyməsi ilə bu məlumatı localStorage-a yazın. Sayfa yeniləndikdə, localStorage-dan bu məlumatı oxuyun və ekranda göstərin.
//    - **Şərt**: Sayfanı yenidən yüklədikdə məlumat silinməməli və ekranın üst hissəsində istifadəçi adı göstərilməlidir.

// const input = document.querySelector("#usernameInput");
// const button = document.querySelector("#saveBtn");
// const text = document.querySelector("#usernameText");

// button.addEventListener("click", function () {
//   const username = input.value;  

//   if (username !== "") {
//     localStorage.setItem("username", username);
//     text.innerHTML = `${username}`;
//   }
// });


// 2. **localStorage-da məlumatı sıfırlamaq**  
//    - **Tapşırıq**: Sayfanın üst hissəsində bir "Bütün məlumatları sil" düyməsi yaradın. Bu düyməyə kliklədikdə bütün localStorage-ı sıfırlayın.

// const button = document.querySelector("#clearBtn");

// button.addEventListener("click", function () {
//     localStorage.clear();
// })



// İstifadəçi məlumatlarını form vasitəsilə alıb localStorage-da saxlayan tətbiq yazın.

// Şərtlər:
// 1. Form submit olunanda səhifə reload olmamalıdır
// 2. Bütün input-lar doldurulmayıbsa alert göstərilməlidir
// 3. Məlumatlar localStorage-da object şəklində saxlanmalıdır
// 4. Məlumat uğurla saxlanandan sonra:
//    - form təmizlənsin
//    - məlumatlar DOM-da göstərilsin
// 5. Səhifə reload olanda localStorage-da data varsa ekrana yazılsın
// 6. Clear düyməsi localStorage-ı və DOM-u təmizləməlidir


// const form = document.querySelector("#userForm");
// const output = document.querySelector("#output");
// const clearBtn = document.querySelector("#clearBtn");

// function showData(e) {
//     e.preventDefault()
//     const name = document.querySelector("#name").value
//     const surname = document.querySelector("#surname").value
//     const age = document.querySelector("#age").value
//     if (!name || !surname || !age) {
//         alert ("Butun saheler doldurulmalidir")
//     }

//     const user = {
//         name ,
//         surname,
//         age
//     };

//     localStorage.setItem("userData",JSON.stringify(user));

//     output.innerHTML = `${name}, ${surname}, ${age}`
//     form.reset();
// }
// form.addEventListener("submit",showData);

// function clearData() {
//     localStorage.removeItem("userData");
//     output.innerHTML = "";
// }
// clearBtn.addEventListener("click",clearData);


// 1. Səhifədə login form olmalıdır:
//    - username input
//    - password input
//    - login button

// 2. Login button klik olunanda:
//    - səhifə reload olmamalıdır
//    - inputlar boşdursa alert göstərilməlidir

// 3. Doğru login məlumatı:
//    username: admin
//    password: 1234

// 4. Doğru login olduqda:
//    - localStorage-da "isAuth" = true saxlanmalıdır
//    - ekranda "Welcome" mesajı çıxmalıdır
//    - form gizlənməlidir

// 5. Yanlış login olduqda error mesajı göstərilməlidir

// 6. Logout button olmalıdır:
//    - localStorage silinməlidir
//    - login form geri gəlməlidir

// 7. Dark / Light mode toggle button olmalıdır
//    - theme body class ilə dəyişməlidir
//    - seçilmiş mode localStorage-da saxlanmalıdır
//    - reload zamanı bərpa olunmalıdır

// const loginForm = document.getElementById("loginForm");
// const usernameInput = document.getElementById("username");
// const passwordInput = document.getElementById("password");
// const errorText = document.getElementById("error");

// const loginBox = document.getElementById("loginBox");
// const welcomeBox = document.getElementById("welcomeBox");
// const logoutBtn = document.getElementById("logoutBtn");

// const themeToggle = document.getElementById("themeToggle");

// loginForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const username = usernameInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (!username || !password) {
//         alert("Bütün sahələri doldurun!");
//         return;
//     }

//     if (username === "admin" && password === "1234") {
//         localStorage.setItem("isAuth", "true");
//         showWelcome();
//     } else {
//         errorText.innerHTML = "Username və ya password yanlişdir";
//     }
// });

// logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("isAuth");
//     welcomeBox.classList.add("hidden");
//     loginBox.classList.remove("hidden");
// });

// function showWelcome() {
//     loginBox.classList.add("hidden");
//     welcomeBox.classList.remove("hidden");
//     errorText.innerHTML = "";
// }

// function applyTheme(theme) {
//     if (theme === "dark") {
//         document.body.classList.add("dark");
//         themeToggle.innerHTML = "Light Mode";
//     } else {
//         document.body.classList.remove("dark");
//         themeToggle.innerHTML = "Dark Mode";
//     }
// }

// themeToggle.addEventListener("click", () => {
//     const currentTheme = localStorage.getItem("theme");

//     if (currentTheme === "dark") {
//         localStorage.setItem("theme", "light");
//         applyTheme("light");
//     } else {
//         localStorage.setItem("theme", "dark");
//         applyTheme("dark");
//     }
// });



// 3 tab yaradın və hər birinə ötürmək üçün kontent massivi mövdu olsun. Butonlara klik zamanı content dəyişsin. Son seçilən tab localStorage-da qalsın.


// const contents = ["a", "b", "c"];

// const buttons = document.querySelectorAll("button");
// const contentDiv = document.querySelector("#content");

// let activeTab = localStorage.getItem("activeTab");
// contentDiv.textContent = contents[activeTab];
// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const id = button.id;
//         console.log(id)

//         contentDiv.textContent = contents[id];
//         localStorage.setItem("activeTab", id)
//     })
// })


// Səhifədə:
// 1 ədəd input
// 1 ədəd button
// 1 ədəd p elementi olsun

// Funksiya:
// 1️⃣ Input-a ad yazılır
// 2️⃣ Button-a click ediləndə:
// ad localStorage-a yazılsın
// p içində “Salam, {ad}” görünsün
// 3️⃣ Səhifə reload olunanda:
// localStorage-da ad varsa
// avtomatik p-də göstərilsin

// const input = document.getElementById("inputname");
// const button = document.getElementById("btn");
// const text = document.getElementById("text");

// button.addEventListener("click", function() {
//     const username = input.value.trim();

//     if (username !== "") {
//         localStorage.setItem("username", username)
//         text.innerHTML = `Salam ${username}`;
//     }

//     const savedName = localStorage.getItem("username");

//     if (savedName) {
//         text.innerHTML = `Salam ${savedName}`;
//     }
// })

// 1 ədəd “+” button
// 1 ədəd “–” button
// 1 ədəd p elementi (rəqəmi göstərmək üçün)

//  Funksiya:
// 1️⃣ Başlanğıc dəyər 0 olsun
// 2️⃣ “+” click ediləndə:
// rəqəm 1 artsın
// ekranda yenilənsin
// 3️⃣ “–” click ediləndə:
// rəqəm 1 azalsın
// ekranda yenilənsin
// 4️⃣ Rəqəm localStorage-da saxlanılsın
// 5️⃣ Səhifə reload olunanda:
// son rəqəm qaldığı yerdən davam etsin

// const incBtn = document.getElementById("incBtn");
// const decBtn = document.getElementById("decBtn");
// const countText = document.getElementById("count");

// let count = 0;
// incBtn.addEventListener("click", function() {
//     count ++;
//     countText.innerHTML = count;

//     localStorage.setItem("number", count);
// })

// decBtn.addEventListener("click", function() {
//     count --;
//     countText.innerHTML = count;

//     localStorage.setItem("number",count);
// })


// TASK 2: Dinamik Todo List
// --------------------------------------------------
// ŞƏRT:
// - Input və Add düyməsi olsun
// - Daxil edilən todo elementi siyahıya əlavə edilsin
// - Səhifə yenilənəndə todo-lar itməsin, yəni dinamik olaraq localda saxlanılmalı
// - Siyahıdan todo elementini silmək mümkün olsun
// --------------------------------------------------

// const input = document.getElementById("inputTodo");
// const addBtn = document.getElementById("addBtn");
// const list = document.getElementById("list");

// addBtn.addEventListener("click", function() {
//     const taskText = input.value.trim();

//     const li = document.createElement("li");
//     li.innerHTML = taskText;

//     localStorage.setItem("taskText",taskText)

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

// TASK 3: Səhifəyə baxış counter 
// --------------------------------------------------
// ŞƏRT:
// - İstifadəçi səhifəyə hər daxil olduqda say artırılsın
// - Say localStorage-da saxlanılsın
// - Ekranda göstərilsin

// let count = localStorage.getItem("pageViewCount");

// count = Number(count) + 1;

// localStorage.setItem("pageViewCount", count);

// document.getElementById("counter").textContent = count;

// TASK: Son Ziyarət Vaxtını Göstər
// ŞƏRT:

// İstifadəçi səhifəyə daxil olduqda:
// Əgər bu ilk girişdirsə, ekranda
// 👉 “Xoş gəlmisiniz! Bu sizin ilk girişinizdir.” yazılsın
// Əgər istifadəçi əvvəllər səhifəyə daxil olubsa:
// localStorage-dan son giriş vaxtı oxunsun
// Ekranda belə bir mətn göstərilsin:
// 👉 “Son dəfə bu səhifəyə: 12.02.2026 – 18:45 tarixində daxil olmusunuz”
// Hər girişdə:
// Mövcud tarix və saat localStorage-da yenilənsin

// const text = document.getElementById("text");

// const lastVisit = localStorage.getItem("lastVisitTime");

// const now = new Date();

// function formatDate(date) {
//     const day = String(date.getDate());
//     const month = String(date.getMonth() + 1);
//     const year = date.getFullYear();
//     const hours = String(date.getHours());
//     const minutes = String(date.getMinutes());

//     return `${day}.${month}.${year}  ${hours}:${minutes}`;
// }

// if (lastVisit === null) {
//     text.textContent = "Xoş gəlmisiniz! Bu sizin ilk girişinizdir.";
// } else {
//     const lastDate = new Date(lastVisit);
//     text.textContent = "Son dəfə bu səhifəyə: " + formatDate(lastDate) + " tarixində daxil olmusunuz";
// }
// localStorage.setItem("lastVisitTime", now.toString());


// Filter System

// Məhsul siyahısı göstərən səhifə qur.

// Tələblər:
// 	•	Məhsullar JS array-də saxlanmalıdır
// 	•	Hər məhsulda: name, price, category olmalıdır
// 	•	Aşağıdakı filterlər birlikdə işləməlidir:
// 	•	search input (ada görə axtarış)
// 	•	category checkbox filter (çox seçimli)
// 	•	max price input
// 	•	sort (ucuzdan bahaya / bahadan ucuza)
// 	•	Filterlər eyni anda tətbiq olunmalıdır
// 	•	Hər dəyişiklikdə DOM yenidən render olunmalıdır
// 	•	Seçilmiş filter ayarları localStorage-da saxlanmalıdır
// 	•	Refresh olanda filterlər bərpa olunmalıdır

// const products = [
//     { name: "iPhone 14", price: 1200, category: "phone" },
//     { name: "Samsung", price: 1000, category: "phone" },
//     { name: "MacBook", price: 2500, category: "laptop" },
//     { name: "Dell", price: 1800, category: "laptop" },
//     { name: "AirPods", price: 200, category: "accessory" }
// ];

// const productList = document.getElementById("productList");
// const searchInput = document.getElementById("search");
// const maxPriceInput = document.getElementById("maxPrice");
// const sortSelect = document.getElementById("sort");
// const categoryCheckboxes = document.querySelectorAll("input[type='checkbox']");

// let filters = {
//     search: "",
//     maxPrice: "",
//     categories: [],
//     sort: ""
// };

// function saveFilters() {
//     filters.search = searchInput.value;
//     filters.maxPrice = maxPriceInput.value;
//     filters.sort = sortSelect.value;

//     filters.categories = Array.from(categoryCheckboxes)
//         .filter(cb => cb.checked)
//         .map(cb => cb.value);

//     localStorage.setItem("filters", JSON.stringify(filters));
// }

// function loadFilters() {
//     const saved = localStorage.getItem("filters");
//     if (!saved) return;

//     filters = JSON.parse(saved);

//     searchInput.value = filters.search;
//     maxPriceInput.value = filters.maxPrice;
//     sortSelect.value = filters.sort;

//     categoryCheckboxes.forEach(cb => {
//         cb.checked = filters.categories.includes(cb.value);
//     });
// }

// function filterData() {
//     saveFilters();

//     const query = filters.search.toLowerCase();
//     const maxPrice = filters.maxPrice
//         ? Number(filters.maxPrice)
//         : Infinity;

//     let filteredProducts = products.filter(item => {
//         const matchName = item.name.toLowerCase().includes(query);
//         const matchPrice = item.price <= maxPrice;
//         const matchCategory =
//             filters.categories.length === 0 ||
//             filters.categories.includes(item.category);

//         return matchName && matchPrice && matchCategory;
//     });

//     if (filters.sort === "asc") {
//         filteredProducts.sort((a, b) => a.price - b.price);
//     } else if (filters.sort === "desc") {
//         filteredProducts.sort((a, b) => b.price - a.price);
//     }

//     renderProducts(filteredProducts);
// }

// function renderProducts(list) {
//     productList.innerHTML = list.length
//         ? list.map(p => `
//             <div>
//                 <strong>${p.name}</strong> - ${p.price}$ (${p.category})
//             </div>
//         `).join("")
//         : "<p>Məhsul tapilmadi</p>";
// }

// searchInput.addEventListener("input", filterData);
// maxPriceInput.addEventListener("input", filterData);
// sortSelect.addEventListener("change", filterData);

// categoryCheckboxes.forEach(cb => {
//     cb.addEventListener("change", filterData);
// });

// loadFilters();



