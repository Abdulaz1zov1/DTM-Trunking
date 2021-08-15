const mongoose=require('mongoose')

const News = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    date:{type:Date,default:Date.now()}
})

module.exports=mongoose.model('News',News)