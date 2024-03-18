import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <button
        className='bg-gray-200 m-2 p-2 rounded-lg text-sm font-bold'>{text}</button>
    </div>
  )
}

export default Button