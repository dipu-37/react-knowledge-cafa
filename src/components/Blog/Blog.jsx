import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog);
    const {title , cover ,author, author_img,posted_date, reading_time,hashtags  }=blog;
    return (
        <div>
            <img className='w-[845px] h-[450px]' src={cover} alt={`cover pictute of the title ${title}`} />
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
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,index) => <span key={index}><a href="">{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.prototype={
    blog: PropTypes.object.isRequired
}
export default Blog;