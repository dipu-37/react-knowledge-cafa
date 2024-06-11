import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBooksmark,handleMarkAsRead}) => {
   // console.log(blog);
    const {title , cover ,author, author_img,posted_date, reading_time,hashtags  }=blog;
    return (
        <div className='mb-20'>
            <img className='w-full h-[450px] mb-4 space-y-4' src={cover} alt={`cover pictute of the title ${title}`} />
            <div className='flex justify-between items-center' >
                <div className='flex items-center'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                            <h3 className='text-2xl'>{author}</h3>
                            <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBooksmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mt-2 '>{title}</h2>
            <p>
                {
                     hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a> </span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        author_img: PropTypes.string.isRequired,
        posted_date: PropTypes.string.isRequired,
        reading_time: PropTypes.number.isRequired,
        hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
};
export default Blog;