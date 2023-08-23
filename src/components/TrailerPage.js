import React from 'react'
import { Link } from 'react-router-dom'

function TrailerPage({ description }) {
    return (
        <div>
            <div>
                Trailer Page
            </div>
            {description}
            <Link to='/'>Back to home</Link>
        </div>
    )
}

export default TrailerPage