import  express  from "express";
import {registerController,
    loginController,
    testController,
    updateProfileController,
    getOrdersController,
    getAllUsersController
} from '../controllers/authController.js'

import {requireSignIn,isAdmin} from "../middlewares/authMiddleware.js"
//router object

const router=express.Router()


//routing
//RREGSITER ||  METHOD POST

router.post('/register',registerController)

//LOGIN || POST
router.post("/login", loginController);

//protected route auth
router.get('/user-auth',requireSignIn,(req,res)=>{
res.status(200).send({ok:true});
})

//protected admin route auth
router.get('/admin-auth',requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
    })

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);


// all users
router.get("/allusers",getAllUsersController);
// //all orders
// router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// // order status update
// router.put(
//   "/order-status/:orderId",
//   requireSignIn,
//   isAdmin,
//   orderStatusController
// );

//test routes
router.get("/test",requireSignIn,isAdmin , testController);
export default router;