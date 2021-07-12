const mongoose = require("mongoose");
const mon = 'mongodb+srv://Ratan1118:Rk@8531118@cluster0.oecij.mongodb.net/GoWithAlgo?retryWrites=true&w=majority'
mongoose.connect(mon,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
   console.log("connection successful");
}).catch((e)=>{
    console.log("not connected");
})