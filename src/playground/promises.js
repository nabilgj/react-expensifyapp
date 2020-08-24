const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "nabil",
      age: 34,
    });
    // reject("something went wrong!");
  }, 1500);
});

console.log("before");

promise
  .then((data) => {
    console.log("1", data);

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("this is my other promise");
      }, 1500);
    });
  })
  .then((str) => {
    console.log("does this run for promise chain?", str);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("after");
