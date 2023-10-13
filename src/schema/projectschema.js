
const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types

// const Schema = mongoose.Schema;

const projectSchema=mongoose.Schema({
    userId: {
     type:ObjectId,
     ref:'User'
    },
    image:String,
    title:String,
    description:String,
    url:String,
    type:String,
});
const projectuser=mongoose.model('projectuser',projectSchema);
module.exports=projectuser;