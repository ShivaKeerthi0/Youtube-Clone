import React, { useEffect, useState } from 'react'
import VideoCard, {LikedVideoCard} from './VideoCard'
import {YOUTUBE_VIDEOS_API} from '../utils/constants'
import { Link } from 'react-router-dom'

const VideoContainer = () => {

    const [movies, setMovies] = useState([]);

    const LikedVideo = LikedVideoCard(VideoCard)

    useEffect(()=>{
        getMovies();
    },[])

    const getMovies = async () =>{

        const data = await fetch(YOUTUBE_VIDEOS_API)

        const json =  await data.json();

        console.log(json.items);

        setMovies(json.items)
    }

  return  movies && (
    <div className='flex flex-wrap'>
        {
            movies.map((movie,index) => (
                <Link to ={'/watch?v='+movie.id} key = {movie.id} >
                   { parseInt(movie.statistics.likeCount) > 10000  ? 
                   (
                   <LikedVideo movie ={movies[index]} />
                   )
                    : ( <VideoCard movie= {movies[index]}/> )
                   }
                </Link>
            ))
        }
    </div>
  )
}

export default VideoContainer