import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h2>Sorry...</h2>
            <p>That Page Cannot be found</p>
            <Link to='/'>Back to the HomePage</Link>
        </div>
    )
}


export default NotFound
