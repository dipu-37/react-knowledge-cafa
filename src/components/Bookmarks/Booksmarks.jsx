
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Booksmarks = ({bookmarks, readingTime}) => {
  return (
    <div>
      <div className=' bg-gray-300 mt-2 ml-4 pt-4'>
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center '>bookmarked Blog: {bookmarks.length}</h2>
            
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    </div>
  )
}

Booksmarks.propTypes = {
bookmarks:PropTypes.array,
readingTime: PropTypes.number
}

export default Booksmarks
