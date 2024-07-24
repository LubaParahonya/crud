import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Home = ({items}) => {
  const history = useNavigate();
  return (
  <>
    <div className='button-create'>
        <Link className='create' to='/posts/new'>Создать пост</Link>
    </div>
    <ul className='listPost'>
      {items.map(el => (
        <div className='post' key={el.id} onClick={()=> history(`/posts/${el.id}`)} >
            <div className='mainInfo'>
            <img className='photo' src='\src\photo\072d7e4f-9772-48b1-b101-700f870ea43d.webp'/>
            <h2 className='name'>{el.name}</h2>
            </div>
            <h3 className='content'>{el.content}</h3>
        </div>
      ))}
    </ul>
    </>
  )
}

export default Home
