import React from 'react'
import CommentsList from './CommentsList'


const commentsData = [
    {
      name: "Shiva Keerthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shiva Keerthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Azad Keerthi",
          text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Shiva Keerthi",
          text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Azad Keerthi",
              text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Shiva Keerthi",
                  text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Azad Keerthi",
                      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Shiva Keerthi",
                          text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Azad Keerthi",
                      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Shiva Keerthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shiva Keerthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shiva Keerthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Shiva Keerthi",
      text: "Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];

const CommentsContainer = () => {
  return (
    <div>
        <p className = 'text-xl font-bold'>Comments</p>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer