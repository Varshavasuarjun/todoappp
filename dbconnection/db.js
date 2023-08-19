const mongoose=require("mongoose");
const url=process.env.URL
mongoose.connect(url)
.then(()=>{
 console.log("CONNECTED TO ATLES DB")
})
.catch((e)=>{
 console.log("FAILED TO CONNECT DB")
})