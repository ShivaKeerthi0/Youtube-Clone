import React from 'react'
import ButtonList from './ButtonList'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'


const Body = () => {
  return (
    <div className="flex">
        <div>
        <Sidebar/>
        </div>
        <div>
        <Outlet/>
        </div>
    </div>
  )
}

export default Body