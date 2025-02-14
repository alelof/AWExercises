// const bcrypt = require('bcrypt');
const User = require('../models/user');
const passport = require("passport");
const { BadRequest } = require('../utils/error');

function logout(req, res, next) {
  req.logout()
  res.clearCookie("connect.sid", { path: "/" });

  req.session.destroy(function (err) {
    if (err) {
      return next(err);
    }
    res.status(200).json({message:"logged out!"});
  });
}

function login(req, res, next) {
  passport.authenticate("local",(err, user, info)=>{

    if(err || !user){
      try{
      throw new BadRequest(info.message)
      // res.status(401).send(info.message)
      }
      catch(error){
      next(error);
      }
    }
    else{
      req.login(user, function(error){
        if(err){
          console.log("error error");
          return next(err)
        }
        console.log("in login");
        res.status(200).json({
          email:user.email,
          name: user.name
        })
      })
    }
  })(req, res, next);

}

  async function register(req, res, next) {
    const {name, email, password} =req.body;
    try{
    if(!name || !password || !email){
      throw new BadRequest("Missing required fields: name, email, or password.")
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      // return res.status(400).send(`Email <${req.body.email}> already taken`);
      throw new BadRequest("Email is taken! Please use another email address.")

    } else {

    const hashedPassword = password;
    // await bcrypt.hash(req.body.password, 10)
      const newuser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      });
      //Auto-login
          req.login(newuser, function (err) {

            if (err) {
              next(err);
            }
            res.status(200).json({
              email: newuser.email,
              name: newuser.name
            });
          });
        }
    }
    catch(error) {
      console.log(error)
      next(error);
    }
  };

  function getUser(req, res) {
      res.status(200).json({
    	email: req.user.email,
      name: req.user.name
  	});
    // res.json({message: "hello!"})
  };

  module.exports = {getUser, login, logout, register};
