const router=require('express').Router();

router.post('/signup',(req,res)=>{
    res.send('signup succesfull')
})
router.post('/login',(req,res)=>{
    res.send('login succesfull')
})

module.exports=router;