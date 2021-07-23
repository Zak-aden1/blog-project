import React from 'react'
import styles from './BlogList.module.scss'

const BlogList = ({blogs, handleDelete}) => {
    return (
        <div>
            <h2>All Blogs!</h2>
             {blogs.map((blog) => (
                <div className={styles.blogPreview} key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    <button onClick={() => {handleDelete(blog.id)}}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList
