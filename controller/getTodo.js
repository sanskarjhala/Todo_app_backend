const todoSchema = require('../models/todo');


exports.getTodo =async (req,res) =>{
    try{
        const allTodos = await todoSchema.find({});
        res.status(200).json({
            success:true,
            data:allTodos,
            message:"got all todos data"
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"data not fetched due to error"
        })

    }
}

exports.getTodoById = async (req,res) => {
    try{
        const id = req.params.id;
        const todo = await todoSchema.find({_id:id});
        res.status(200).json({
            success:true,
            data:todo,
            message:"data fected with id succefully",
        })
    }
    catch(error){
        res.status(400).json({
            success:false,
            message:"id not found"
        })
    }
}