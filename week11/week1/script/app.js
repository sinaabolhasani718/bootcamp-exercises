function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("Hello World");
      } else {
        reject(new Error("Error occurred"));
      }
    }, 1000);
  });
}

randomPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });