const os = require("os");
const greeting = require("./greeting");

// получим имя текущего пользователя
let userName = os.userInfo().username;

console.log(`Дата запроса: ${greeting.date}`);
console.log(greeting.getMessage(userName));
const User = require("./user.js");

let eugene = new User("Eugene", 32);
eugene.sayHi();
