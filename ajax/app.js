const btn = document.querySelector(".btn");
// const url = "./api/sample.txt";
const url = "./api/people.json";

btn.addEventListener("click", () => {
  getData(url);
});

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

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.querySelector(".text");
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => {
          return `<p>${item.name}</p>`;
        })
        .join("");
      text.innerHTML = displayData;
    } else {
      console.log({ status: xhr.status, text: xhr.statusText });
    }
  };
  xhr.send();
}
