const express=require ('express');
const app = express();
const path=require('path');
app.use(express.static('public'));
app.listen(3030, ()=> console.log('servidor corriendo en el puerto 3030'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'src/views/index.html'));
});