const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const userController = require('../controllers/userController');
// const {blogadd,blogupdate,blogget,blogdelete} = require('../../index');

//Blog routes

router.post("/bloguser/blogadd", blogController.blogadd);
router.get("/bloguser/blogget", blogController.blogget);
router.put("/bloguser/blogupdate/:id", blogController.blogupdate);
router.delete("/bloguser/blogdelete/:id", blogController.blogdelete);
router.get("/bloguser/getbyuserID/:id", blogController.getbyuserID);


//user routes
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/getprofiledata/:id", userController.getprof);
router.put("/updateprofile/:id", userController.updateprof);


module.exports = router;