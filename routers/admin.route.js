import { Router } from "express";
import adminCtl from "../controllers/admin.controller.js";
import userAuth from "../middlewares/userAuth.js";
import passport from "passport";

const adminRouter = Router();

adminRouter.get('/signup',adminCtl.signupPage);
adminRouter.post('/signup',adminCtl.signup);

adminRouter.get('/login',adminCtl.loginPage);
adminRouter.post('/login',passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect:'/login'
}));

adminRouter.use(userAuth);
adminRouter.get('/',userAuth,adminCtl.dashboard);
adminRouter.get('/logout',userAuth,adminCtl.logout);
adminRouter.get('/get-all-users',userAuth,adminCtl.getAllUsersPage);

export default adminRouter;