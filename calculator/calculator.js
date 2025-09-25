const display = document.getElementById("display");
async function aparecerdisplay(input) {
  if (display.value === "0") {
    display.value = input;
  } else {
    display.value += input;
  }
}

async function apagar() {
  display.value = "0";
}
async function resultado() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Erro";
  }
}
