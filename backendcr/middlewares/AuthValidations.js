const Joi=require('joi')
const Schema=mongoose.Schema

const signupValidation=(req,res,next)=>{
    const schema=Joi.object({
        name:Joi.string().min(4).max(100).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(100).required()
    })
    const {error}=schema.validate(req.body)
    if(error){
        return res.status(400).json({message:"Information not valid",error})
    }
    next();
}
const loginValidation=(req,res,next)=>{
    const schema=Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(4).max(100).required()
    })
    const {error}=schema.validate(req.body)
    if(error){
        return res.status(400).json({message:"Information not valid",error})
    }
    next();
}

module.exports={
    signupValidation,
    loginValidation
}
