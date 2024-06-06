const todoSchema = require('../models/todo')


exports.updateTodo = async (req,res) =>  { 
    try{
        const id = req.params.id;
        const {title , description} = req.body;
        const updatedData = await todoSchema.findByIdAndUpdate(
            {_id:id} , {title,description,updatedAt:Date.now()}
        )

        //updating data which is not present
        if(!updatedData){
            return
            res.json({
               success:false,
               message:"invalid id" 
            })
        }
        res.json({
            success:true,
            data:updatedData,
            message:"data updated succefully"

        })
    }
    catch(error){
        res.json({
            success:false,
            message:"server error"
        })

    }
}