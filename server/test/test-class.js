const User  = require("../models/User");


const us = new User(1, 'y@gmail.com', '**********');

console.log(us.toString());
console.log(us.Id);
console.log(us.email);
console.log(us.passwrd);