window.onload = function () {
    document.body.style.opacity = '1'
}
let NameUser = document.getElementById("username");
let sexy = document.getElementById("nameUser");
// let data = []
// if (localStorage.user != null) {
//     data = JSON.stringify(localStorage.user);
// } else {
//     data = []
// }
function sentData() {
  let dataName = {
    name: NameUser.value,
  };
  localStorage.setItem("user", JSON.stringify(dataName));
}
function getData() {
  const storedData = localStorage.getItem("user");
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    sexy.innerHTML = parsedData.name;
  } else {
    sexy.innerHTML = "User Name";
  }
}
getData();
