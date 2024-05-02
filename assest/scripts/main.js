window.onload = function () {
    document.body.style.opacity = '1'
}
let NameUser = document.getElementById("username");
let sexy = document.getElementById("nameUser");
function sentData() {
  let dataName = {
    name: NameUser.value,
  };
  localStorage.setItem("user", JSON.stringify(dataName));
    location.reload()
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
