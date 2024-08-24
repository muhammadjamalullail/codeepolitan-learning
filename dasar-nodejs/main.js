const jokes = require("give-me-a-joke");
const color = require("chalk-rainbow");

jokes.getRandomDadJoke((joke) => {
  console.log(color(`halo: ${joke}`));
});
