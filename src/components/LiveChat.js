import { useEffect , useRef } from 'react'
import React  from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { generateRandomName, makeRandomMessage } from '../utils/helper'
import { addChatMessage } from '../utils/appStore/chatSlice'

const LiveChat = () => {

    const dispatch = useDispatch();
    const textRef = useRef(null);

    useEffect(()=>{

        // We are here implementing the process of polling so that we get new messages from api after every 3 seconds.
           const interval =  setInterval(()=>{
                // fetch data using api 
                dispatch(
                    addChatMessage({
                        name : generateRandomName(),
                        message : makeRandomMessage(21),
                    })
                )

            }, 3000)

            return ()=>{
                clearInterval(interval);
            }

    }, [])
 
    const messages = useSelector( (store) => store.chat.messages) 

  return (
    <div className="flex flex-col">
    <div className="m-2 mb-0 p-2 border-black bg-gray-200 rounded-lg shadow-lg h-[32rem] w-[400px] overflow-y-scroll flex flex-col-reverse">
        {
            messages.map((message, index) =>(
                <ChatMessage  key = {index} name = {message.name} message = { message.message} />
            ))
        }
    </div>
    <div>
        <form className="m-1 border border-black rounded-lg shadow-lg" onSubmit={(e) => {
            e.preventDefault();



            dispatch(
                addChatMessage(
                    {
                        name : "Shiva",
                        message : textRef.current.value
                    }
                )
            )

            textRef.current.value = "";
            
            }}>
        <input  ref={textRef} type="text" className="text-centre m-1 p-2 rounded-lg shadow-md border border-black" ></input>
        <button className="m-2 bg-blue-200 px-2 rounded-lg shadow-md text-lg font-bold">Send</button>
        </form>
    </div>
    </div>
  )
}

export default LiveChat