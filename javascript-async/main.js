const container = document.querySelector("div");

const element = document.createElement("h1");
const textNode = document.createTextNode("Muhammad Jamalullail");
element.appendChild(textNode);

function add() {
  const element = document.createElement("h2");
  element.append("Muhammad Nazhan");
  return element;
}


