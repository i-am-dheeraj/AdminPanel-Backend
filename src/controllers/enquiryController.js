const enquiryuser=require('../schema/enquiryschema');

exports.enquiryadd = async (req, res) => {
    try{
   
    console.log(req.body);
    // const enquiryData = new enquiryuser(req.body);
    // await enquiryData.save();
    const enquiryData = await enquiryuser.create(req.body)
    res.json({message: "enquiryuser added successfully", data:enquiryData});
        }catch(err){
            res.status(500).json(err.message)
        }
};
exports.enquiryget = async (req, res) => {
    try {
     
        let enquiryData = await enquiryuser.find()

        res.json(enquiryData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }
};
exports.enquiryupdate = async (req, res) => {
    try{
            const enquiryData = await enquiryuser.findByIdAndUpdate(req.params.id, { $set: req.body },
            { new: true });
            
       res.json({data:enquiryData});
        }catch(err){
            res.status(500).json(err)
        }
};
exports.enquirydelete = async (req, res) => {
    const enquiryData = await enquiryuser.findByIdAndDelete(req.params.id);
    try{
        if(!enquiryData){
            res.status(400).json({message:"enquiryuser not found."});
        }
        res.status(200).json({ message: 'enquiryuser deleted successfully' });  
    } catch(err){
        res.status(500).json(err)
    }
};
exports.enquirygetbyid = async (req, res) => {
    try {
     
        let enquiryData = await enquiryuser.findById(req.params.id)

        res.json(enquiryData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }
};
// exports.getUserById = async (req, res) => {
//     try {
//         let userData = await enquiryuser.find({userId:req.params.id});

//         if (!userData) {
//             // Handle the case when the user is not found
//             return res.status(404).json({ message: "enquiry not found" });
//         }

//         res.json(userData);
//     } catch (error) {
//         console.log(error);
//         if (!error.status) {
//             error.status = 500;
//         }

//         res.status(error.status).json({ message: error.message });
//     }
// };
exports.getbyuserID = async(req, res) =>{
    try{
    let enquiryData = await enquiryuser.find({userId: req.params.id});
    res.json(enquiryData);
    // console.log(enquiryData[1]);
    }catch(err){
        console.log(err);
    }
}