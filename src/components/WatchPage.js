import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setMenu} from '../utils/appStore/appSlice'
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {

    const dispatch = useDispatch();

    const [queryparam] = useSearchParams();

    const videoId = queryparam.get("v");


    useEffect(()=>{
       dispatch(setMenu(false));

    }, [])


  return (
    <div>
      <div>
        <iframe className='m-2 p-2'
        width="1000" height="500" src={"https://www.youtube.com/embed/"+videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <div className = 'm-2 p-2'>
      <CommentsContainer/>
    </div>
    </div>
  )
}

export default WatchPage