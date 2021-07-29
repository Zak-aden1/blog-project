import React from 'react'
import styles from './Create.module.scss'
import { useState } from 'react'
import { useHistory } from 'react-router'

const Create = () => {
    const [title, setTitle] =useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [adding, setAdding] = useState(false)

    const history = useHistory()

    const handleForm = (e) => {
        e.preventDefault()
        const blog = {title, body, author}
        setAdding(true)
        
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(res => {
            setAdding(false)
            history.push('/')
        })
    }
    return (
        <div className={styles.create}>
            <h2>Add a new Blog!</h2>
            <form onSubmit={handleForm}>
                <label>Blog Title</label>
                <input required type="text" value={title} onChange={(e) => {setTitle(e.target.value)}}/>

                <label>Blog Body</label>
                <textarea required></textarea>

                <label>Blog Author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!adding && <button>Add Blog</button>}
                {adding && <button>Adding.....</button>}
            </form>
        </div>
    )
}

export default Create
