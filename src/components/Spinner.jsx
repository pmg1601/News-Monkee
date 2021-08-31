import React from 'react'
import loading from '../images/loading.gif'

const Spinner = () => {
    return (
        <div>
            <img className='d-block m-auto' src={loading} alt='loading' />
        </div>
    )
}

export default Spinner
