import React,{useState,useEffect} from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
function Home() {
    const [countries,setCountries]= useState([]);
  const [countryMatch,setCountryMatch]= useState([]);
  const [value, setValue]= useState('');
  const navigate= useNavigate();
  useEffect(()=>{
    fetch("/suggestContries").then(
      response=>response.json(),
    ).then(
      data=>{
        setCountryMatch(data.countries);
      }
    );
    const enter=(e)=>{
      if(e.key === "Enter"){
        
      }
    };
    document.addEventListener('keydown', enter);
  },[])
  //console.log(countryMatch)

const handleFilter=(text)=>{
  var res=[];
  setValue(text)
  console.log(text.length)
    if(text.length !== 0){
      res=countryMatch.filter(f=> f.official.toLowerCase().includes(text.toLowerCase())).slice(0,10);
    }else{

    }
    setCountries(res);   
  }

  const selectCountry= (ctry)=>{
    setValue(ctry)
    setCountries([]);
    navigate('/info',{state:{selectedCountry:ctry}})
  }
  return (
    <div className="bg-img">
      <input id="input1" className="searchBar" type="text" placeholder="Enter country name here"
       onChange={e=>handleFilter(e.target.value)} value={value}  >
      </input>
      {countries.length!==0 && (
        <div className="suggestions"> 
          {countries.map((d,i)=>(
            <div key={i} onClick={e=>selectCountry(d.official)}>
              {d.official}
            </div>))}
        </div>
      )}
    </div>
  )
}

export default Home