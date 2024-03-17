import React from 'react'
import { USER_ICON_URL } from '../utils/constants'

const RightSection = () => {
  return (
    <div className="m-auto">
        <img alt="user-icon" src={USER_ICON_URL} className='h-10 m-2'></img>
    </div>
  )
}

export default RightSection