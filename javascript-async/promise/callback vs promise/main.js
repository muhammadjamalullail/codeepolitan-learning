// Callback Version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4000) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      console.log(delay);
      failure("Error: Connection Timeout");
    } else {
      console.log(delay);
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

// Promise Version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 1000) + 1;
    setTimeout(() => {
      if (delay > 500) {
        reject("Error: Connection Timeout");
      } else {
        resolve(`Success: ${url} (${delay}ms)`);
      }
    }, delay);
  });
};

// requestCallback(
//   "moview.com",
//   function (response) {
//     console.log(`${response}`);
//   },
//   function (error) {
//     console.log(`${error}`);
//   }
// );

requestPromise("instagram.com")
  .then((response) => {
    console.log(response);
    console.log("success 1");
    return requestPromise("instragram.com");
  })
  .then(() => {
    console.log("success 2");
    return requestPromise("instagram.com");
  })
  .then(() => {
    console.log("success 3");
    return requestPromise("instagram.com");
  })
  .catch((error) => {
    console.log(error);
  });
