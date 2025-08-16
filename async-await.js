//* .then -> await

function myPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi There");
    }, 1000);
  });
}

function main() {
  console.log(myPromise());

  myPromise().then((val) => {
    console.log(val);
    console.log("Hi There1");
  });
}

main();

//* using async-await

function myPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Hi There");
    }, 1000);
  });
}

async function main() {
  const val = await myPromise(); // thread is waiting here
  console.log(myPromise());
  console.log(val);
  console.log("Hi There1");

}

main();

// console.log("Hello World");
