const mongoose=require('mongoose')

const Mongo_URL=process.env.MONGO_CNN

mongoose.connect(Mongo_URL)
.then(res=>{
    console.log('Mongodb connectd')
})