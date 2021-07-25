import React from 'react'
import styles from './BlogList.module.scss'
import { Link } from 'react-router-dom'

const BlogList = ({blogs}) => {
    return (
        <div>
            <h2>All Blogs!</h2>
             {blogs.map((blog) => (
                <div className={styles.blogPreview} key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList
