import React from 'react'
import Button from './Button';

const ButtonList = () => {

    const buttons = ["All", "Gaming", "Trending", "Shopping", "Beauty", "Movies", "Music", "Sports", "Politics", "News", "International", "Education", "DSA","JAVA", "Microsoft" ];
  return (
    <div className='flex'>
        {
            buttons.map((button, index) =>(
                <Button  key = {index} text={button}/>
            ))
        }
    </div>
  )
}

export default ButtonList