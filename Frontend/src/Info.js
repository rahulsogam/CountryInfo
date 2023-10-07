import React,{useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {FaHome, FaTimes} from 'react-icons/fa';
import './Info.css';
function Info() {
    const {state}= useLocation();
    const [value, setValue]= useState(state.selectedCountry);
    const [countryData,setcountryData]= useState([]);
    const navigate= useNavigate();

    const handleFilter=(text)=>{
        setValue(text);
    }
    const callHome= ()=>{
        navigate('/')
    }
    const searchInfo= ()=>{
        fetch(`/checkEntry?param=${value}`).then(
            response=>response.json(),
          ).then(
            data=>{
                if(data.status !== 200){
                    console.log(data.status)
                }else
                console.log(data.status)
                //setcountryData(data)
              
            }
          );
    }
    const clear= ()=>{
        setValue('')
    }
    
    useEffect(()=>{
        const enter=(e)=>{
            if(e.key === "Enter"){
              searchInfo()
            }
          };
          document.addEventListener('keydown', enter);
          return () => {
            document.removeEventListener('keydown', enter);
          };
    },[value])
    
    
  return (
    <div>
        <diV className="searchbar">
            <FaHome  className="home-icon"></FaHome>
            <p className="home" onClick={callHome}>Home</p>
            <input id="input1"  type="text" onChange={e=>handleFilter(e.target.value)}  value={value} />
            {value.length !==0 &&(<FaTimes  className="icon" onClick={clear}/>)}           
        </diV>
        <hr className="hr"></hr>
        <div>
            {countryData.tld}
        </div>
      </div>
  )
}

export default Info