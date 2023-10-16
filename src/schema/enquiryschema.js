
const mongoose=require('mongoose');
const {ObjectId} = mongoose.Schema.Types

// const Schema = mongoose.Schema;

const enquirySchema=mongoose.Schema({
    userId: {
     type:ObjectId,
     ref:'User'
    },
    username:String,
    date:String,
    email:String,
    enquiry:String,
});
const enquiryuser=mongoose.model('enquiryuser',enquirySchema);
module.exports=enquiryuser;