
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Bookmarks/Booksmarks'
import Header from './components/Header/Header'

function App() {
 const [readingTime, setReadingTime]= useState(0)
const [bookmarks, setBookmark]=useState([]);
const handleAddToBooksmark= blog =>{
 
  const newBookmark = [...bookmarks, blog];
  setBookmark(newBookmark);
}

const handleMarkAsRead = time =>{
  const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
}
  return (
    <>
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBooksmark={handleAddToBooksmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      
      <Booksmarks bookmarks={bookmarks} readingTime={readingTime}></Booksmarks>
      </div>
      
    </>
  )
}

export default App
