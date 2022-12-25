const btns = document.querySelectorAll(".btn");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
const divide = document.querySelector(".divide");
const deleteBtn = document.querySelector(".delete");
const screen = document.querySelector("#screen");
const ranger = document.querySelector("#ranger");
const body = document.querySelector("body");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    screen.value += btn.innerHTML;
  });
});

equal.onclick = () => {
  try {
    screen.placeholder = eval(screen.value);
  } catch (error) {
    screen.placeholder = "Math Error";
    screen.value = "";
  }
  screen.value = "";
};

console.log("hello");

reset.onclick = () => {
  screen.value = "";
  screen.placeholder = "0";
};

deleteBtn.onclick = () => {
  screen.value = screen.value.slice(0, -1);
  let val = screen.value;

  if (val.length === 0) {
    screen.value = "";
    screen.placeholder = "0";
  } else {
    console.log("hello");
  }
};

if (!screen.placeholder === "0") {
  add.onclick = () => {
    screen.value = screen.placeholder;
    console.log(screen.value);
  };
}

ranger.oninput = function () {
  if (ranger.value === "2") {
    body.classList.add("theme2");
    body.classList.remove("theme3");
  }
  if (ranger.value === "3") {
    body.classList.add("theme3");
    body.classList.remove("theme2");
  }
  if (ranger.value === "1") {
    body.classList.remove("theme2");
    body.classList.remove("theme3");
  }
};
