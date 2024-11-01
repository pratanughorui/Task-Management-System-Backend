const {Router}=require("express");
const {
    registerUser,
    loginUser
}=require("../controllers/user.controller")
const router = Router()
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports=router;