import express from "express"
import { addFood, listFood, removeFood,updateFood } from "../controllers/foodController.js"
import multer from "multer"


//create express router, using this create get post methods
const foodRouter = express.Router();

//Image Storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

//send date to server and get response
foodRouter.post("/add",upload.single("image"),addFood)

foodRouter.get("/list", listFood)

foodRouter.post("/remove", removeFood);

// Update food route
foodRouter.post("/update", upload.single("image"), updateFood);


export default foodRouter;