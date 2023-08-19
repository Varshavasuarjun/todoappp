const mongoose=require("mongoose");
const taskSchema=mongoose.Schema({
    Task:"String",
   Checked : {
        
        type: Boolean,
        default: true,
    },
})
const taskModel=mongoose.model("task",taskSchema);
module.exports=taskModel;