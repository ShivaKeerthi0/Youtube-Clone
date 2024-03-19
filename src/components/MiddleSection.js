import React,{useEffect,useState} from 'react'
import {YOUTUBE_SEARCH_API, DEBOUNCE_TIMEOUT} from '../utils/constants'
import {useDispatch, useSelector } from 'react-redux';
import { addSuggestion } from '../utils/appStore/searchSlice';


const MiddleSection = () => {

    const [searchQuery, setSearchQuery] = useState(null);
    const [suggestions, setSuggestions] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState(false);


    const dispatch = useDispatch();

    const cachedSuggestions = useSelector((store) => store.search);

    useEffect (()=>{

        // Applying Debouncing such that if keystroke is <200ms then skip api call

      const timer =  setTimeout(
        ()=>{

            if(cachedSuggestions[searchQuery]){
                setSuggestions(cachedSuggestions[searchQuery]);
            } else{
                getSuggestionsOnSearch();
            }
        }
       ,DEBOUNCE_TIMEOUT);

       // clearing timer after every key-stroke as we need to consider the last key storke only
       
       return () =>{
        clearTimeout(timer);
       }

    }, [searchQuery])

    const getSuggestionsOnSearch = async () =>{

        

        console.log(searchQuery); 
        const data = await fetch('https://thingproxy.freeboard.io/fetch/'+YOUTUBE_SEARCH_API+searchQuery);
        const suggestions = await data.json();
        console.log(suggestions[1]);
        setSuggestions(suggestions[1]);
        dispatch(addSuggestion(
                {
                    [searchQuery]:suggestions[1],
                }
            ))
    }

  return (
    <div className="justify-center m-4">
        <input type="text" className="border border-gray-200 p-2  rounded-l-full w-9/12 text-center"
        onChange={
            (e)=>{
                setSearchQuery(e.target.value);
            }

        }

        onFocus={
            ()=>{
                 searchQuery && setShowSuggestions(true);
            }
        }

        onBlur={
            ()=>{
                setShowSuggestions(false);
            }
        }
        ></input>
        <button className="rounded-r-full p-2 border border-gray-300 bg-gray-200">
            Search
        </button>{
            showSuggestions && searchQuery &&  (
                
                <div className='fixed bg-white w-[28.5rem] p-2 m-2 z-10 rounded-lg'>
                    {
                        suggestions.map((suggestion, index)=>(
                            <p key={index} className='text-md'>{suggestion}</p>
                        ))
                    }
                   
                </div>
            )
        }
        
    </div>
  )
}

export default MiddleSection