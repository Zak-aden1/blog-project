import React from 'react'
import styles from './Home.module.scss'
import { useState } from 'react'
import BlogList from '../BlogList'
import { useEffect } from 'react'
import useFetch from '../../useFetch'


const Home = () => {
    const {data, ispending, error} = useFetch('https://my-dojo-api.herokuapp.com/blogs')


  const handleSubmit = (id) => {
      
  }

  
    return (
        <div className={styles.home}>
            {ispending && <div>loading...</div>}
            {error && <div> {error} </div>}
            { data && <BlogList blogs={data} handleSubmit={handleSubmit}/> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author.includes('yoshi'))} /> */}
        </div>
    )
}

export default Home
