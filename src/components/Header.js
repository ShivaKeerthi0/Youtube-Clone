import React from 'react'
import LeftSection from './LeftSection'
import MiddleSection from './MiddleSection'
import RightSection from './RightSection'

const Header = () => {
  return (
    <div className="w-100% grid grid-flow-col shadow-2xl">
        <LeftSection className="col-span-1"/>
        <MiddleSection className="col-span-10"/>
        <RightSection className="col-span-1"/>
    </div>
  )
}

export default Header