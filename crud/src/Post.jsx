import React from 'react'

const Post = ({items}) => {
  return (
    <div>
      {<div className='post'>
            <div className='mainInfo'>
            <img className='photo' src='\src\photo\072d7e4f-9772-48b1-b101-700f870ea43d.webp'/>
            <h2 className='name'>{items[id].name}</h2>
            </div>
            <h2 className='content'>{items[id].content}</h2>
        </div>}
      
    </div>
  )
}

export default Post
