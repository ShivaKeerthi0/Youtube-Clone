import React from 'react'
import {LOGO_URL, MENU_URL} from '../utils/constants'

const LeftSection = () => {
  return (
    <div className="flex">
        <img alt="menu" src={MENU_URL} className="h-12 p-2 m-2"></img>
        <img alt= 'logo' src ={LOGO_URL} className="h-12 m-2"></img>
    </div>
  )
}

export default LeftSection