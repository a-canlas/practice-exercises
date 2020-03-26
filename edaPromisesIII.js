let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Yooooooo")
  }, 1000);
});

//  To turn an asynchronus call into a promise, wrap it in a Promise object.
