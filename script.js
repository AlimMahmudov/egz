const boby = document.querySelector(".boby");

ListProduct();

function ListProduct() {
  boby.innerHTML = "";
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.forEach((el) => {
    let list = document.createElement("div");
    let listinput1 = document.createElement("p");
    let listinput2 = document.createElement("p");
    let listinput3 = document.createElement("p");
    let listinput4 = document.createElement("p");

    // classList

    list.classList.add("list");
    listinput1.classList.add("listInput1");
    listinput2.classList.add("listInput2");
    listinput3.classList.add("listInput3");
    listinput4.classList.add("listInput4");
    //  classList

    listinput1.innerText = el.LastName1;
    listinput2.innerText = el.LastName2;
    listinput3.innerText = el.LastName3;
    listinput4.innerText = el.LastName4;

    list.append(listinput1);
    list.append(listinput2);
    list.append(listinput3);
    list.append(listinput4);
    boby.append(list);
  });
}
