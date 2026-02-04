// 3. **Yerli İstifadəçilərin Məlumatlarını Çəkmək (GET sorğusu)**  
//    - **Tapşırıq**: Random User Generator API-dən istifadə edərək təsadüfi istifadəçi məlumatlarını çəkin və bu məlumatları ekranda göstərin.
//    - **Şərt**: GET sorğusu ilə təsadüfi istifadəçi məlumatları çəkin (ad, soyad, şəkil və ünvan).
// https://randomuser.me/api/

// const button = document.querySelector("#loadUser");
// const userCard = document.querySelector("#userCard");

// button.addEventListener("click", function () {
//   fetch("https://randomuser.me/api/")
//     .then(Response => Response.json())
//     .then(data => {
//       const user = data.results[0];

//       const fullName = `${user.name.first} ${user.name.last}`;
//       const image = user.picture.large;
//       const address = `${user.location.city}, ${user.location.country}`;

//       userCard.innerHTML = `
//         <img src="${image}" alt="">
//         <h3>${fullName}</h3>
//         <p>${address}</p>
//       `;
//     })
//     .catch(err => {
//       console.log("Xəta baş verdi:", err);
//     });
// });

// https://randomuser.me/api/ API-dən GET sorğusu göndər

// Bir düymə yarat: “İstifadəçi gətir”

// Düyməyə klik edildikdə:

// İstifadəçinin adını

// email-ini

// profil şəklini

// Ekranda göstər

// Şərtlər:

// fetch istifadə olunmalıdır

// Səhifə yenilənməməlidir

// Hər klikdə fərqli istifadəçi göstərilməlidir

// const button = document.querySelector("#loadUser");
// const userCard = document.querySelector("#userCard");

// button.addEventListener("click", function () {
//     fetch("https://randomuser.me/api/")
//     .then(Response => Response.json())
//     .then(data => {
//         const user = data.results[0];

//         const fullName = `${user.name.first} ${user.name.last}`;
//         const image = user.picture.large;
//         const email = `${user.email}`;

//         userCard.innerHTML = `
//         <img src="${image}" alt="">
//         <h3>${fullName}</h3>
//         <p>${email}</p>`;
//     })
//     .catch(err => {
//       console.log("Xəta baş verdi:", err);
//     })
// })


// 1. RestCountires API istifadə edərək bütün ölkələri ekrana çıxaran tətbiq yazın.

// Şərtlər:
// 1. Səhifə açılan kimi API-yə fetch atılmalıdır
// 2. Bütün ölkələr card şəklində göstərilməlidir
// 3. Hər ölkə üçün:
//    - adı
//    - bayrağı
//    - regionu
//    - population göstərilməlidir
// 4. API gələnə qədər "Loading..." yazısı görünməlidir
// https://restcountries.com/v3.1/all

// const countriesContainer = document.getElementById("countries");
// const loadingText = document.getElementById("loading");

// fetch("https://restcountries.com/v3.1/all?fields=name,flags,region,population")
//     .then(response => response.json())
//     .then(data => {
//         loadingText.style.display = "none";

//         data.forEach(country => {
//             const card = document.createElement("div");
//             card.className = "card";

//             card.innerHTML = `
//                 <img src="${country.flags.png}" alt="flag">
//                 <div class="info">
//                     <h3>${country.name.common}</h3>
//                     <p><strong>Region:</strong> ${country.region}</p>
//                     <p><strong>Population:</strong> ${country.population}</p>
//                 </div>
//             `;

//             countriesContainer.appendChild(card);
//         });
//     })
//     .catch(error => {
//         loadingText.innerText = "Xəta baş verdi";
//         console.error(error);
//     });

// Task: Sadə API İstifadəsi

// Bir veb səhifədə “İstifadəçiləri Göstər” düyməsi olsun.

// Düyməyə klik ediləndə https://randomuser.me/api/?results=5 API-dən 5 təsadüfi istifadəçi məlumatı çəkilsin.

// İstifadəçilərin ad, soyad və email məlumatları səhifədə list olaraq göstərilsin.

// const loadUsersBtn = document.getElementById("loadUsersBtn");
// const userList = document.getElementById("userList");

//     loadUsersBtn.addEventListener("click", function() {
//       fetch("https://randomuser.me/api/?results=5")
//         .then(response => response.json())
//         .then(data => {
//           userList.innerHTML = ""; 
//           data.results.forEach(user => {
//             const li = document.createElement("li");
//             li.textContent = `${user.name.first} ${user.name.last} - ${user.email}`;
//             userList.appendChild(li);
//           });
//         })
//         .catch(error => {
//           console.error("Xəta baş verdi:", error);
//         });
//     });