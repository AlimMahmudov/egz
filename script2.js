const LastName1 = document.querySelector(".firstName1");
const LastName2 = document.querySelector(".firstName2");
const LastName3 = document.querySelector(".firstName3");
const LastName4 = document.querySelector(".firstName4");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let obj = {
    LastName1: LastName1.value,
    LastName2: LastName2.value,
    LastName3: LastName3.value,
    LastName4: LastName4.value,
  };

  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.push(obj);
  localStorage.setItem("data", JSON.stringify(data));
});
