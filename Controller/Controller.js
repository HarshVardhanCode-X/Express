const { assignmentModel } = require("../Model/Model");


const addassignment=async(req,res,next)=>{
    try {

         let {title,description,dueDate,status}=req.body;
          
         console.log(title,description,dueDate,status);

         let newAssignment= new assignmentModel({
            title,description,dueDate,status
         })
  
         console.log(newAssignment);
         await newAssignment.save()


         res.status(200).send('Ass added succes')

    } catch (error) {
        
         console.log(error,'error while saving Ass');

         res.status(500).send('error while saving the Ass')
         
    }
}



const getSingleAssignment=async(req,res,next)=>{

    try {
        
        let {id}=req.params;

         console.log(id,'this is id');
         
        let res1=await assignmentModel.findById({_id:id})

        console.log(res1);
        res.json(res1)
        
        
    } catch (error) {
        res.status(500).send(error)
    }
}


const getAllAssignments=async(req,res,next)=>{

    try {
        let val=await assignmentModel.find()

        res.status(200).send(val)
        
    } catch (error) {
        console.log('error while fetching the student');
        res.status(500).send(error)
        
    }
}



const deleteAssignments=async(req,res,next)=>{

    try {
        
        let {id}=req.params;

         console.log(id,'this is id');
         
        let res1=await assignmentModel.findByIdAndDelete({_id:id})

        console.log(res1);
        res.json(res1)
        
    } catch (error) {
        res.status(500).send(error)
    }
}





module.exports={
    addassignment,getAllAssignments,getSingleAssignment
    ,deleteAssignments
}