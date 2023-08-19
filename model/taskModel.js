const mongoose=require("mongoose");
const taskSchema=mongoose.Schema({
    Task:"String",
   Checked : {
        
        type: Boolean,
        default: false,
    },
})
const taskModel=mongoose.model("task",taskSchema);
module.exports=taskModel;