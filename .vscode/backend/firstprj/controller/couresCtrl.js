import courseModel from "../models/coursesModel.js";

const get = async(req, res) => {
    try {
        const courses = await courseModel.find();
        res.status(200).json({message: "Courses Fetched Successfully", success: true, data: courses});
    } catch (err) {
        res.status(500).json({message: "Internal Server Error!", success: false});
    }
}; 
const add = async (req, res) =>{
    try {
        const data = req.body
        data.createdAt = new Date()
        const course = new courseModel(data);
        await course.save();
        res.status(201).json({message: "Course ADDED Successfully", success: "true"});
        
    } catch (e) {
        console.log("error", e);
       res.status(500).json({message: " Internal Sever Error", success: "false"});
    }
}
 const update = async (req, res) =>{
    try {
    const courseId = req.body._id;
    const updateData = req.body;
    delete updateData._id;
    await courseModel.findOneAndUpdate({ _id:courseId}, updateData);
        res.status(201).json({message: "Course UPDATED Successfully", success: "true"});
        } catch (error) {
        console.log("error",e);
        res.status(500).json({message: "INTERNAL SERVER ERROR", success: "false"});
        
    }
 }
  const updatePut = async(req, res) => {
    try {
    const courseId = req.body._id
    const updateData = req.body;
    delete updateData._id;
    await courseModel.findOneAndUpdate( 
        {_id: courseId},
        {
            $set: {
             name: updateData.name,
             price: updateData.price,
             rating: updateData.rating, 
             trainer:updateData?.trainer || "",
            },
       }
    
    );
       res.status(200).json({message:"Course Updated Successfully", success: "true"});
       } catch (error) {
        console.log("error",e);
        res.status(500).json({message:"Internal Server Error", success: "false"});
        
    }
  };


  const deleteCourse = async(req, res) => {
    try {
    const courseId = req.params.id;
    await courseModel.findByIdAndDelete({ _id: courseId});
     res.status(200).json({message:"Course Deleted Successfully", success: "true"});
       } catch (error) {
        console.log("error",e);
        res.status(500).json({message:"Internal Server Error", success: "false"});
        
    }
  };

export { get, add, update , updatePut, deleteCourse };