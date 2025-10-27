const namer = "Bill";
console.log(namer);
console.log(__dirname);
console.log(__filename);

const os = require("os");
console.log(os.platform(), os.homedir());

const fs = require("fs");

// reading files
fs.readFile("./addFileName", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// writing files, reminder that if the file doesn't exist, IT WILL BE CREATED
fs.writeFile("./addFileName", "hello, world", () => {
  console.log("file was written...");
});

// directories
if (!fs.existsSync("./newFolderName")) {
  fs.mkdir("./newFolderName", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created...");
  });
} else {
  fs.rmdir("./newFolderName", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted...");
  });
}

// deleting files
if (fs.existsSync("./deleteMe.txt")) {
  fs.unlink("./deleteMe.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted...");
  });
}

// readStream, note that .on is an event listener

const readStream1 = fs.createReadStream('./blogText1.txt')
readStream1.on('data', (chunk) => {
console.log('--NEW CHUNK--');
// use toString() to see strings rather than number chunks
console.log(chunk.toString());
})

// OR...do this
const readStream2 = fs.createReadStream("./blogText2.txt", { encoding: 'utf8' });
readStream2.on("data", (chunk) => {
  console.log("--NEW CHUNK--");
  // utf8 means you no longer need to use toString() to see strings content
  console.log(chunk);
});

// writeStream
const readStream3 = fs.createReadStream("./blogText3.txt", { encoding: "utf8"});
const writeStream1 = fs.createWriteStream("./blogText4.txt", {
  encoding: "utf8",
});

readStream3.on("data", (chunk) => {
  console.log("--NEW CHUNK--");
  console.log(chunk);
  writeStream1.write('\nNEW CHUNK\n');
  writeStream1.write(chunk);
});

// piping with pipe!

const readStream5 = fs.createReadStream("./blogText5.txt", {
  encoding: "utf8",
});
const writeStream2 = fs.createWriteStream("./blogText6.txt", {
  encoding: "utf8",
});

// readStream5.on("data", (chunk) => {
//   console.log("--NEW CHUNK--");
//   console.log(chunk);
//   writeStream2.write("\nNEW CHUNK\n");
//   writeStream2.write(chunk);
// });

//Below is the same as above that is commented out!
readStream5.pipe(writeStream2)