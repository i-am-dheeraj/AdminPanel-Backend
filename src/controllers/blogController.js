const bloguser=require('../schema/blogschema');

exports.blogadd = async (req, res) => {
    try{
   
    console.log(req.body);
    // const blogData = new bloguser(req.body);
    // await blogData.save();
    const blogData = await bloguser.create(req.body)
    res.json({message: "bloguser added successfully", data:blogData});
        }catch(err){
            res.status(500).json(err.message)
        }
};
exports.blogget = async (req, res) => {
    try {
     
        let blogData = await bloguser.find()

        res.json(blogData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }
};
exports.blogupdate = async (req, res) => {
    try{
            const blogData = await bloguser.findByIdAndUpdate(req.params.id, { $set: req.body },
            { new: true });
            
       res.json({data:blogData});
        }catch(err){
            res.status(500).json(err)
        }
};
exports.blogdelete = async (req, res) => {
    const blogData = await bloguser.findByIdAndDelete(req.params.id);
    try{
        if(!blogData){
            res.status(400).json({message:"bloguser not found."});
        }
        res.status(200).json({ message: 'bloguser deleted successfully' });  
    } catch(err){
        res.status(500).json(err)
    }
};
exports.bloggetbyid = async (req, res) => {
    try {
     
        let blogData = await bloguser.findById(req.params.id)

        res.json(blogData);
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
//         let userData = await bloguser.find({userId:req.params.id});

//         if (!userData) {
//             // Handle the case when the user is not found
//             return res.status(404).json({ message: "blog not found" });
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
    let blogData = await bloguser.find({userId: req.params.id});
    res.json(blogData);
    // console.log(blogData[1]);
    }catch(err){
        console.log(err);
    }
}