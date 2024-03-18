import React from 'react'
import {LOGO_URL, MENU_URL} from '../utils/constants'
import {useDispatch} from 'react-redux'
import { toggleMenu } from '../utils/appStore/appSlice'
import { Link } from "react-router-dom";


const LeftSection = () => {


    const dispatch = useDispatch();

    const toggle = () =>{

        dispatch(toggleMenu());
    }



  return (
    <div className="flex">
        <img  alt="menu" src={MENU_URL} className="h-12 p-2 m-2 cursor-pointer"
        
        onClick={
            ()=>{
                toggle();
            }
        }
        
        ></img>
       <Link to="/"><img alt= 'logo' src ={LOGO_URL} className="h-12 m-2 cursor-pointer"></img></Link>
    </div>
  )
}

export default LeftSection