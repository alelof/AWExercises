// const router = require("express"). Router();
const UserController = require("../controllers/UserController");
const express = require("express");
const bodyParser = require("body-parser");
const { application } = require("express");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const router = express.Router();

router.get("/", UserController.getUsers);
router.get("/:id", UserController.getUserById);
// router.post("/",urlencodedParser, UserController.createUser); //users
// get /login
// post /login

app.route("/deletetask/:id", ()=>{
  //handle the delete logic
})

module.exports = router;
