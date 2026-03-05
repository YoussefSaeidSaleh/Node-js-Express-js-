//! Session 1
const fs = require("node:fs");

// read file

// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("Error reading file", err);
//   } else {
//     console.log("File content 3", data);
//   }
// });

// #################################################################################################

// write to file

// fs.writeFile("./users.json", JSON.stringify([{id: 1, name:"ahmedd"}]), "utf-8", (err) => {
//   if (err) {
//     console.log("Error writing file", err)
//   }
//   console.log("Done")
// })

// #################################################################################################

// delete file

//  fs.unlink("./hello.txt", (err) => {
//   if (err) {
//     console.log("Error deleting file", err)
//   }
//  })

// #################################################################################################

// Streams [readable - writeable]

// const rStream = fs.createReadStream("./hello.txt", "utf-8");
// const wStream = fs.createWriteStream("./stream.txt", "utf-8");

// rStream.on("data", (chunk) => {
//   console.log("==chunk==", chunk);
//   console.log("\n==chunk==\n");
//   wStream.write(chunk);
// });
// rStream.on("end", () => {
//   console.log("Finished reading file.");
// });

// #################################################################################################

// const writableStream = fs.createWriteStream("stream.txt");

// writableStream.write("Hello, ");
// writableStream.write("world!");
// writableStream.end(()=>{
//   console.log("finsh")
// }); // مهمة علشان يقول خلصت الكتابة
// const fs = require('fs');

// #################################################################################################

// const readStream = fs.createReadStream('hello.txt');
// const writeStream = fs.createWriteStream('stream.txt');

// readStream.pipe(writeStream);

// #################################################################################################

// const { Transform } = require('stream');

// const upperCaseTransform = new Transform({
//   transform(chunk, encoding, callback) {
//     const upperChunk = chunk.toString().toUpperCase();
//     callback(null, upperChunk);
//   }
// });

// fs.createReadStream('hello.txt')
//   .pipe(upperCaseTransform)
//   .pipe(fs.createWriteStream('stream.txt'));

// #################################################################################################

// const _ = require("lodash");

// console.log("hello ");
// console.log("hello ");

// #################################################################################################

//! Session 3

const crypto = require("node:crypto");
process.env.UV_THREADPOOL_SIZE = 10

const start = performance.now();


crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
crypto.pbkdf2("secret", "salt", 1000, 64, "sha512", () => {
  console.log("End of P ms", performance.now() - start);
});
