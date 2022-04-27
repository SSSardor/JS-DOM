const h1 = (document.getElementById("h1").innerHTML = "Box Generator");
let box = document.getElementById("box");
let body = document.getElementsByTagName("body");
document.getElementById("btn").addEventListener("dblclick", function () {
  let color = document.getElementById("bgcolor").value;
  const input1 = document.getElementById("input1").value;
  const input2 = document.getElementById("input2").value;

  if (input1 && input2) {
    box.style.height = input2;
    box.style.width = input1;
    box.style.display = "block";
    box.style.backgroundColor = color;
  }
  let input3 = document.getElementById("input3");
  if (input3) {
    box.style.borderRadius = input3.value;
  }
});

document.getElementById("btn2").addEventListener("click", function () {
  let input3 = document.getElementById("input3");
  input3.style.display = "block";

  console.log(input3.value);
});
