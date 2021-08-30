import React, { Component } from 'react'
import loading from '../images/loading.gif'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img className='d-block m-auto' src={loading} alt='loading' />
            </div>
        )
    }
}
