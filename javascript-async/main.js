// Callback Version
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error: Connection Timeout");
    } else {
      success(`Success: ${url} (${delay}ms)`);
    }
  }, delay);
};

// Promise Version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 5000) {
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

requestPromise("instagram.com").then(
  (response) => {
    console.log(response);
    requestPromise("instagram.com").then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    requestPromise("instagram.com").then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
