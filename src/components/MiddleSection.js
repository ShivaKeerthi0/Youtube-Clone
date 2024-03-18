import React from 'react'
import { SEARCH_ICON_URL } from '../utils/constants'

const MiddleSection = () => {
  return (
    <div className="justify-center m-4">
        <input type="text" className="border border-gray-200 p-2  rounded-l-full w-9/12 text-center"></input>
        <button className="rounded-r-full p-2 border border-gray-300 bg-gray-200">
            Search
        </button>
    </div>
  )
}

export default MiddleSection