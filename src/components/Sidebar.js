import React from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Sidebar = () => {

const toogleMenu = useSelector((store) => store.app.showMenu)


  return toogleMenu && (
    <div className="shadow-lg m-2 p-2 h-screen">
        
        <ul className=" m-2 p-2">
            <li><Link to='/'>Home</Link></li>
            <li>Shorts</li>
            <li>Subscriptions</li>
            <li>You</li>
            <li>History</li>
        </ul>
        <h1 className='font-bold text-lg text-black m-2 p-2'>Explore</h1>
        <ul className="m-2 p-2">
            <li>Trending</li>
            <li>Shopping</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Live</li>
            <li>Gaming</li>
            <li>News</li>
            <li>Sports</li>
            <li>Learning</li>
            <li>Fashion</li>
        </ul>
        <ul>
            
        </ul>
    </div>
  )
}

export default Sidebar