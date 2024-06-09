
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Booksmarks from './components/Bookmarks/Booksmarks'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
      
      <Header></Header>
      <div className='md:flex '>
      <Blogs></Blogs>
      <Booksmarks></Booksmarks>
      </div>
      
    </>
  )
}

export default App
