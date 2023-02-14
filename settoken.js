const fs = require("fs");
const readline = require("readline");
const ytLink = require("./yt");
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("");
console.log("....................................................");
console.log("     This Tool Present by Md Dipu Ahmed contact  Whatsapp 01312701392 শর্টনার বানাতে চাইলে মেসেজ করুন");
console.log("````````````````````````````````````````````````````");
console.log("");
userInput.question("Enter your youtube token:~$ ", (value) => {
  console.log(value);
  fs.writeFile(
    "yt.js",
    `const ytLink =
  "${value}";module.exports = ytLink;
`,
    function (err) {
      console.log("টোকেন সেট হয়ে গেছে.");

      process.exit();
    }
  );
});
