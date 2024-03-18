import React from 'react'
import {USER_ICON_URL} from '../utils/constants'

const Comment = ({comment}) => {
  return (
    <div>
        <div className='flex my-1  bg-gray-100 rounded-lg shadow-md'>
            <img  className = 'h-8 w-8 m-2 ' alt="user-logo" src={USER_ICON_URL}/>
            <div className='my-2'>
            <p className='font-bold text-lg'>{comment.name}</p>
            <p className='text-md m-2'>{comment.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Comment