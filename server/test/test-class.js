const User  = require("../models/User");
const us = new  User(1 , "y@gmail.com" , "***");
console.log(us.toString())