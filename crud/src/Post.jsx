import React from 'react'

const Post = ({items}) => {
const currentUrl = window.location.pathname
const lengthUrl = currentUrl.length
const idPost = parseInt(currentUrl.slice(7, lengthUrl))
  
  return (
    <>
   <div className='post' key={items[idPost].id} >
            <div className='mainInfo'>
            <img className='photo' src='\src\photo\072d7e4f-9772-48b1-b101-700f870ea43d.webp'/>
            <h2 className='name'>{items[idPost].name}</h2>
            </div>
            <h3 className='content'>{items[idPost].content}</h3>
        </div>
    </>
  )
}

export default Post




