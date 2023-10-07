const { default: axios } = require('axios');
const express= require('express')
const cors= require('cors')
const app= express();
app.use(cors())

app.get('/suggestContries', async (req,res)=>{
    try{
        const response= await axios.get("https://restcountries.com/v3.1/all");
        const countries=[];
        const data = response.data;
        for(const d of data){
            countries.push(d.name)
        }
        res.json({countries});
    }catch(error){
        console.error(error);
        res.status(500).json({ error: 'API request failed' });
    }
})

app.get('/checkEntry', async (req,res)=>{
    try{
        const value=req.query.param
        const response= await axios.get(`https://restcountries.com/v3.1/name/${value}?fullText=true`);
        console.log(response)
        res.json({status:response.status,data:response.data})
    }catch(error){
        console.error(error);
        res.json({ status:404,data: 'Not Found' });
    }
})

app.listen(5000,()=>{console.log("server started on 5000" )})