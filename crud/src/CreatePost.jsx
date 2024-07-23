import React from 'react'
import { useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { CiEdit } from "react-icons/ci";
import { MdAddAPhoto } from "react-icons/md";
import { IoIosVideocam } from "react-icons/io";
import { CiSquareMore } from "react-icons/ci";
import {Routes, Route, Link} from 'react-router-dom'


const CreatePost = ({valueInput, setValueInput, refInput, addPost}) => {

  const hendalSubmit = (e) =>{
    e.preventDefault()
    addPost(valueInput)
    setValueInput('')
  }
  return (
    <div>
      <ul className='list-menu'>
        <li className='element-nav'>
            <CiEdit className='icon'/>
            Публикация
        </li>
        <li className='element-nav'>
        <MdAddAPhoto className='icon'/>
            Фото/Видео
        </li>
        <li className='element-nav'>
        <IoIosVideocam className='icon'/>
            Прямой эфир
        </li>
        <li className='element-nav'>
        <CiSquareMore className='icon'/>
            Еще
        </li>
        <li className='element-nav'>
          <Link to='/'>
          <RxCross2 className='icon'/>
          </Link>
        
        </li>
      </ul>
      <form className='text-post' onSubmit={hendalSubmit} >
      <img className='photo' src='\src\photo\072d7e4f-9772-48b1-b101-700f870ea43d.webp'/>
      <input type="text" className='input-post' value={valueInput} onChange={(e)=> setValueInput(e.target.value)} ref={refInput}/>
      <div className='pablic-main' >
      <button className='public' type='submit'  onClick={()=>{refInput.current.focus()}}> Опубликовать </button>
      </div>
      
      </form>
    </div>
  )
}

export default CreatePost
