const express=require("express");
const router= express.Router();
const taskModel=require("../model/taskModel")
router.use(express.urlencoded({extended:false}));
router.use(express.json());
// VIEW ALL TASKS
router.post("/viewalltask", async(req,res)=>{
   const data=req.body;
   const newdata= await taskModel.find();

   res.json(newdata);
})

// ADD TASK
router.post("/addtask",async(req,res)=>{
    const data=req.body;
    const newdata= await taskModel(data).save();
    res.json(newdata);

})
//  FILTER COMPLETED TASK
 router.post("/completedtask",async(req,res)=>{
    data=req.body;
    const newdata=await taskModel.find({"Checked":1 })
    res.json(newdata);
 })
 //  FILTER NON COMPLETED TASK
 router.post("/noncompletedtask",async(req,res)=>{
    data=req.body;
    const newdata=await taskModel.find({"Checked":0})
    res.json(newdata);
 })

//  DELETE TASKE
router.post("/deletetask/:id", async(req,res)=>{
    taskid=req.params.id;
    await taskModel.findByIdAndDelete(taskid);
    res.json({message:"deleted successfully"});
})


module.exports=router;