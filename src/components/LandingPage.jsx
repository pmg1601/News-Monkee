import React, { Component } from 'react'

export default class LandingPage extends Component {
    constructor() {
        super()

        document.title = 'News Monkee'
    }

    render() {
        return (
            <div
                className='d-flex flex-column justify-content-center align-items-center'
                style={{
                    width: '91vw',
                    height: '92vh'
                }}>
                <h1 className='my-4'>Welcome to News Monkee!</h1>
                <p className='text-muted'>
                    Looking for latest news?? We will keep you updated!
                </p>
                <p className='text-muted'>Let's get started!</p>
                <a href='/general' className='btn btn-primary'>
                    Go To Home!
                </a>
            </div>
        )
    }
}
