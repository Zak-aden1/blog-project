import React from 'react'
import useFetch from '../../useFetch'
import { useParams } from 'react-router'
import styles from './BlogDetails.module.scss'
import { useHistory } from 'react-router'

const BlogDetails = () => {
    const history = useHistory()
    const {id} = useParams()
    const {data: blog, error, ispending} = useFetch('http://localhost:8000/blogs/' +id)
    console.log(blog);

    const handleDelete = (e) => {
        fetch('http://localhost:8000/blogs/' + id,  {
            method: 'Delete'
        })
        .then(() => history.push('/'))
    }
    return (
        <div className={styles.blogDetails}>
            {ispending && <div>loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By: {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
