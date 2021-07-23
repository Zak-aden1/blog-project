import React from 'react'
import styles from './Home.module.scss'
import { useState } from 'react'
import BlogList from '../BlogList'

const Home = () => {
    const [blogs, setBlogs] =useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id != id)
    setBlogs(newBlog)
  }
    return (
        <div className={styles.home}>
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author.includes('yoshi'))} />
        </div>
    )
}

export default Home
