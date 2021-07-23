import React from 'react'
import styles from './Home.module.scss'
import { useState } from 'react'
import BlogList from '../BlogList'
import { useEffect } from 'react'

const Home = () => {
    const [blogs, setBlogs] =useState(null)


  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id != id)
    setBlogs(newBlog)
  }

  useEffect((e) => {
      fetch('http://localhost:8000/blogs')
      .then(res => { 
          return res.json()
        })
      .then(data => {
          console.log(data)
          setBlogs(data)
        })
      .catch(err => {
          alert('error')
        })
  },[])
    return (
        <div className={styles.home}>
            <BlogList blogs={blogs} handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author.includes('yoshi'))} />
        </div>
    )
}

export default Home
