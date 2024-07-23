import { useRef, useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import CreatePost from './CreatePost'
import Post from './Post'
import { RxCross2 } from "react-icons/rx";



function App() {
const [items, setItems] = useState(JSON.parse(localStorage.getItem('post')))
const [valueInput, setValueInput] = useState('')
const refInput = useRef()

const addPost = (valueInput) =>{
  const id = items.length? items[items.length -1].id +1 : 1
  const newItem = {id, photo : './photo/i.webp', name: 'Ivan', content: valueInput }
  const newItems = [...items, newItem]
  setItems(newItems)
  localStorage.setItem('post', JSON.stringify(newItems))
  }

 



  return (
    <>
    
     <Routes>
      <Route path='/' element = {<Home items={items}/>}/>
      <Route path='/posts/new' element= {<CreatePost  valueInput={valueInput} setValueInput={setValueInput} refInput={refInput} addPost={addPost}/> } />
      <Route path='/posts/{id}' element={<Post items={items}/>}/>
      </Routes>
    </>
  )
}

export default App
