const express=require ('express');
const app = express();
const path=require('path');
app.use(express.static('public'));
app.listen(3030, ()=> console.log('servidor corriendo en el puerto 3030'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/index.html'));
});
app.get('/babbage',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/babbage.html'));
});app.get('/berners-lee',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/berners.html'));
});app.get('/clarke',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/clarke.html'));
});app.get('/hamilton',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/hamilton.html'));
});app.get('/hopper',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/hopper.html'));
});app.get('/lovelace',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/lovelace.html'));
});app.get('/turing',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/turing.html'));
});