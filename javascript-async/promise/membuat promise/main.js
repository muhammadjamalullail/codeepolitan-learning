document.body.style.transition = "1s ease";
const changeBackground = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, delay);
  });
};

changeBackground("red", 1000)
  .then(() => {
    changeBackground("green", 2000);
  })
  .then(() => {
    changeBackground("blue", 3000);
  })
  .then(() => {
    changeBackground("purple", 4000);
  })
  .then(() => {
    changeBackground("yellow", 5000);
  });
