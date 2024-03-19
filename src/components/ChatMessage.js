import React from 'react'
import {USER_ICON_URL} from '../utils/constants'

const ChatMessage = ({name , message}) => {
  return (
    <div className='flex flex-row'>
        <div>
        <img  className = 'h-8 w-8 m-2 ' alt="user-logo" src={USER_ICON_URL}/>
        </div>
        <div className='mt-2'>
        <span className="text-lg font-bold m-2 boder border-l-slate-50">{name}</span>
        <span>{message}</span>
        </div>
    </div>
  )
}

export default ChatMessage