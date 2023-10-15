//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import  Express  from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import alert from "alert";
const __dirname = dirname(fileURLToPath(import.meta.url));
const password="ILoveProgramming";

const app= Express();
const port=3000;
 
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
   

});

app.post("/check",(req,res)=>{
    const pass=req.body["password"];
    if(pass===password){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
       res.send('<script>alert("Oops, wrong password")</script>');
    }
    });


app.listen( port, () =>{
    console.log("the serever has started");

});

