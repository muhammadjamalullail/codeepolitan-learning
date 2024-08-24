// disabled point Start
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");

if (btn1.disabled && btn2.disabled) {
  btn1.style.background = "rgb(23 37 84)";
  btn2.style.background = "rgb(23 37 84)";
} else {
  btn1.style.background = "rgb(59 130 246)";
  btn2.style.background = "rgb(59 130 246)";
}
// disabled point End

// pick number Start
function voice() {
  const voiceNumber = document.getElementById("voice");
  const optionNumber = document.querySelectorAll("select option");

  voiceNumber.addEventListener("change", () => {
    for (let i of optionNumber) {
      console.log(optionNumber);
    }
  });
}

voice();
// pick number End
