import React from 'react'
import Comment from './Comment'

const CommentsList = ({comments}) => {

  return comments && (
    <div>
        {
            comments.map((comment, index)=>(
                <div key={index}>
                    <Comment comment={comment} />
                    <div className = "pl-5 border border-l-black border-r-white">
                        <CommentsList comments={comment.replies}/>
                    </div>
                </div>
                
            ))
        }
    </div>
  )
}

export default CommentsList