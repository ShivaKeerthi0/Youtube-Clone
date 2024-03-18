import React, { useEffect } from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useDispatch } from 'react-redux'
import { setMenu } from '../utils/appStore/appSlice'

const MainContainer = () => {
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(setMenu(true))
    },[])
  return (
    <div>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer