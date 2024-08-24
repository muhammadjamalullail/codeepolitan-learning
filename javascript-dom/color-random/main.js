const h1 = document.querySelector("h1");
const btn = document.querySelector("button");

function ubahWarna() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

btn.addEventListener("click", () => {
  h1.innerText = ubahWarna();
  document.body.style.background = ubahWarna();
});

// name

const input = document.querySelector("input");
input.addEventListener("keydown", (e) => {
  console.log(e);
  switch (e.code) {
    case "ShiftLeft":
      console.log("anda menekan shift kiri");
      break;

    case "ShiftRight":
      console.log("anda menekan shift kanan");
      break;

    default:
      console.log("anda tidak menekan apa");
  }
});
