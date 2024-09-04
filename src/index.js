const express=require('express');
const app=express();
const PORT=8002;
app.get('/',(req,res)=>{
res.send("Welcome to CORS server! 😁")
})
app.post('/PayInHoursDate',(req,res)=>{
res.json({'PayInHoursDate':'bubble-gum'})
})
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
