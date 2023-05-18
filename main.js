let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let boxs = document.querySelectorAll(".box");
let drug = null;
let del = document.querySelector(".delet");

btn.addEventListener("click", () => {
  if (input.value != "") {
    boxs[0].innerHTML += `
        <p class="item" draggable=true>${input.value} </p>
        `;
    input.value = "";
  }
  dragItem();
});

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      drug = item;
      item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", () => {
      drug = null;
      item.style.opacity = "1";
    });
    item.addEventListener("click", () => {
      item.style.opacity = "0.5";
    });
    boxs.forEach((box) => {
      box.addEventListener("dragover", (e) => {
        e.preventDefault();
        box.style.backgroundColor = "#607d8bcc";
        box.style.color = "#fff";
      });
      box.addEventListener("dragleave", () => {
        box.style.backgroundColor = "#fff";
        box.style.color = "#000";
      });
      box.addEventListener("drop", () => {
        box.appendChild(drug);
        box.style.backgroundColor = "#fff";
        box.style.color = "#000";
      });
    });
    del.addEventListener("click", (e) => {
      items.forEach((it) => {
        item.remove();
      });
    });
  });
}
