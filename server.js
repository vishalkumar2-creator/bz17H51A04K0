const express=require('express')
const path =require('path')
const app=express(
const port=process.env.PORT || 3000

//serve static files
app.use(express.static(__dirname+'/dist/ngproject'));

//send index.html from home(root) route
app.get('/,(req,res) => res.sendFile(path.join(__dirname+'/dist/ngproject/index.html')));
app.listen(port,() =>console.log('Example app listening on port $(port)!'))