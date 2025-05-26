const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");


router.get("/users", UserController.getAllUsers);
router.post("/users", UserController.createUser);
router.get("/users/:email", UserController.getUserByEmail);
router.delete("/users/:id", UserController.deleteUser);

module.exports = router;
