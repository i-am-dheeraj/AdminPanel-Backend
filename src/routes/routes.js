const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const userController = require('../controllers/userController');
const projectController = require('../controllers/projectController');


//Blog routes

router.post("/bloguser/blogadd", blogController.blogadd);
router.get("/bloguser/blogget", blogController.blogget);
router.put("/bloguser/blogupdate/:id", blogController.blogupdate);
router.delete("/bloguser/blogdelete/:id", blogController.blogdelete);
router.get("/bloguser/get/:id", blogController.bloggetbyid);
// router.get("/bloguser/getbyuserid/:id", blogController.getUserById);
router.get("/bloguser/getbyuserID/:id", blogController.getbyuserID);

//user routes
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/getprofiledata/:id", userController.getprof);
router.put("/updateprofile/:id", userController.updateprof);



//project routes

router.post("/projectuser/projectadd", projectController.projectadd);
router.get("/projectuser/projectget", projectController.projectget);
router.put("/projectuser/projectupdate/:id", projectController.projectupdate);
router.delete("/projectuser/projectdelete/:id", projectController.projectdelete);
router.get("/projectuser/get/:id", projectController.projectgetbyid);
router.get("/projectuser/getbyuserID/:id", projectController.getbyuserID);


module.exports = router;