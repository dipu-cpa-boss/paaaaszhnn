const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("       This Tool Present by Md Dipu Ahmed contact  Whatsapp 01312701392 শর্টনার বানাতে চাইলে মেসেজ করুন");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your link:~$ ", (value) => {
  console.log(value);

  //
  fs.writeFile("title.js", `const pageTitle = "${value}";`, function (err) {
    console.log("টাইটেল অ্যাড করা হয়েছে .");
    process.exit();
  });
});
