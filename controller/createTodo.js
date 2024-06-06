const todoSchema = require('../models/todo');

exports.createTodo = async (req,res) =>{
    try{
        const {title , description} = req.body;
        const todo = new todoSchema(
            {title,description}
        );
        const savedTodo = await todo.save();
        res.status(200).json({
            success:true,
            data:savedTodo,
            message:"todo created sucessfully"
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:"todo not created "
        })
    }
}