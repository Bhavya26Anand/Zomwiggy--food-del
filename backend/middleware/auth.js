import jwt from "jsonwebtoken"

//if user sends data, use token to authenticate them
//to decode token we use middleware

const authMiddleware = async (req,res,next) => {
    const {token} =req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try{
        //while creating token we have passed user's id, so while decoding we get that id
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        //calling callback func
        next();

    }catch(error){

        console.log(error);
        res.jso({success:false,message:"Error"})
    }

}

export default authMiddleware;