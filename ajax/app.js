//AJAX request  before ES6    ⬅️

// const btn = document.querySelector(".btn");
// const url = "./api/sample.txt";

// btn.addEventListener("click", () => {
//   getData(url);
// });

// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const text = document.querySelector(".text");
//       text.textContent = xhr.responseText;
//     } else {
//       console.log({ status: xhr.status, text: xhr.statusText });
//     }
//   };
//   xhr.send();
// }

//Json example       ⬅️

// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   getData(url);
// });

// const url = "./api/people.json";
// function getData(url) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       const text = document.querySelector(".text");
//       const data = JSON.parse(xhr.responseText);
//       const displayData = data
//         .map((item) => {
//           return `<p>${item.name}</p>`;
//         })
//         .join("");
//       text.innerHTML = displayData;
//     } else {
//       console.log({ status: xhr.status, text: xhr.statusText });
//     }
//   };
//   xhr.send();
// }

// fetch In ES6 ⬅️

const url = "./api/people.json";

// const response = fetch(url);
fetch(url)
  .then((resp) => {
    //response object
    //useful prop and method
    //console.log(resp)
    //convert response into JSON data
    //returns promise
    console.log(resp);
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    return console.log(err);
  });
