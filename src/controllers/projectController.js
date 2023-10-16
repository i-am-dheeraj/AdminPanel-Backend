const projectuser=require('../schema/projectschema');

exports.projectadd = async (req, res) => {
    try{
   
    console.log(req.body);
    // const projectData = new projectuser(req.body);
    // await projectData.save();
    const projectData = await projectuser.create(req.body)
    res.json({message: "projectuser added successfully", data:projectData});
        }catch(err){
            res.status(500).json(err.message)
        }
};
exports.projectget = async (req, res) => {
    try {
     
        let projectData = await projectuser.find()

        res.json(projectData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }
};
exports.projectupdate = async (req, res) => {
    try{
        console.log("datta7",req.params.id);
            const projectData = await projectuser.findByIdAndUpdate(req.params.id, { $set: req.body },
            { new: true });
            
       res.json({data:projectData});
        }catch(err){
            res.status(500).json(err)
        }
};
exports.projectdelete = async (req, res) => {
    const projectData = await projectuser.findByIdAndDelete(req.params.id);
    try{
        if(!projectData){
            res.status(400).json({message:"projectuser not found."});
        }
        res.status(200).json({ message: 'projectuser deleted successfully' });  
    } catch(err){
        res.status(500).json(err)
    }
};
exports.projectgetbyid = async (req, res) => {
    try {
     
        let projectData = await projectuser.findById(req.params.id)

        res.json(projectData);
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
//         let userData = await projectuser.find({userId:req.params.id});

//         if (!userData) {
//             // Handle the case when the user is not found
//             return res.status(404).json({ message: "project not found" });
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
    let projectData = await projectuser.find({userId: req.params.id});
    res.json(projectData);
    // console.log(projectData[1]);
    }catch(err){
        console.log(err);
    }
}