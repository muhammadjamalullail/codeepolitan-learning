const tes = async () => {
  throw "aduh maaf error pak";
};
tes()
  .then((res) => console.log("Success:", res))
  .catch((err) => console.log("Error:", err));
