const todoSchema = require('../models/todo');

exports.deleteTodo= async(req,res) =>{
    try{
        const id = req.params.id;
        const todo = await todoSchema.findByIdAndDelete({_id:id});
        res.json({
            success:true,
            message:"to delete ho gaya sir",
        })
 
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:err.message,
            }
        )
        
    }
}