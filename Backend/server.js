const { default: axios } = require('axios');
const express= require('express')
const app= express();

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

app.listen(5000,()=>{console.log("server started on 5000" )})