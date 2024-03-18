import React from 'react'


const VideoCard = ({movie}) => {

  

   const {statistics, snippet} = movie

  return (
    <div className='m-2 p-2 w-72 h-80 justify-center     shadow-lg'>
        <img  className='m-2 rounded-lg 'alt="video-img" src = {snippet?.thumbnails?.medium?.url} />
        <ul>
            <li className='font-bold'>{snippet?.title}</li>
            <li>{snippet?.channelTitle}</li>
            <li>{statistics?.viewCount} views</li>
        </ul>
        
    </div>
  )
}

// Example for an Higher Order Component

export const LikedVideoCard = (VideoCard) => {

    return (props) => (
        <div>
            <p className='bg-black m-6 mt-4 p-2 absolute text-white rounded-lg shadow-lg'>Promoted</p>
            <VideoCard {...props}/>
        </div>
    )
}

export default VideoCard