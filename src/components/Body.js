import React from 'react'
import ButtonList from './ButtonList'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

const Body = () => {
  return (
    <div className="flex">
        <div>
        <Sidebar/>
        </div>
        <div>
        <ButtonList/>
        <MainContainer/>
        </div>
    </div>
  )
}

export default Body