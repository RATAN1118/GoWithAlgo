const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
require("./db/conn.js");
const resister = require("./models/resisters");

const static_path = path.join(__dirname,"../public/css");
const templates_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views", templates_path);
hbs.registerPartials(partials_path);

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.get("/",  (req , res) => {
     res.render("index")
})
app.get("/index",  (req , res) => {
  res.render("index")
})

app.get("/resister1",  (req , res) => {
  res.render("resister1")
})

app.post("/resister1", async (req , res) => {
  try {
     const GWAuser = new resister({
        username : req.body.username,
        Email : req.body.emailid,
        Mobile_No : req.body.mobno,
        password : req.body.password
     })
    const resistered = await GWAuser.save();
    res.status(201).render("Home");
      
  } catch (error) {
      res.status(400).send("invalid details");
      
  }
})


/*..log in.........*/
app.get("/login",  (req , res) => {
  res.render("login")
})

app.post("/login", async (req , res) => {
  try {
     const Nemail = req.body.newemail;
     const Npass = req.body.newpassword;
     
    const useremail = await resister.findOne({Email:Nemail});

     if(useremail.password == Npass){
      res.status(201).render("Home" ,{

        user:useremail.username,
      });
     }
     else{
       res.send("invalid details");
     }     
  } catch (error) {
      res.status(400).send("invalid details!!!!!!!");
      
  }
})
 
app.listen(port , () =>{
    console.log("ratan");
})
