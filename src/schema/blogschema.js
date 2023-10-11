
const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types

// const Schema = mongoose.Schema;

const blogSchema=mongoose.Schema({
    userId: {
     type:ObjectId,
     ref:'User'
    },
    image:String,
    title:String,
    description:String
});
const bloguser=mongoose.model('bloguser',blogSchema);
module.exports=bloguser;