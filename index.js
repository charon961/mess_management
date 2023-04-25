const express=require('express')
const app=express();
const port=3000;

app.get('/',function(req,res){
    res.send('Hello World');
})
//abc

app.listen(port,function (err) { 
      if(err){
        console.log(err);
      }
      else{
        console.log(`Server is running at ${port}`)
      }
 })