import React from 'react'
import './Title.css'
const Title = ({ partPage, currentPage }) => {
    return (
        <div className='title-container'>
            <p>{partPage} {currentPage}</p>
        </div>
    )
}

export default Title