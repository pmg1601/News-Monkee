import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        const { title, desc, imgurl, newsurl, author, date, source } =
            this.props

        return (
            <div>
                <div className='card shadow my-4'>
                    <img src={imgurl} className='card-img-top' alt='news' />
                    <div className='card-body'>
                        <h5 className='card-title'>{title}</h5>
                        <hr />
                        <p className='card-text'>{desc}</p>
                        <span
                            className='position-absolute top-0 translate-middle badge rounded-pill bg-danger p-2'
                            style={{ left: '80%', zIndex: '1' }}>
                            {source}
                        </span>

                        <p className='card-text'>
                            <small className='text-muted'>
                                By {author ? author : 'Source'} on{' '}
                                {new Date(date).toGMTString()}
                            </small>
                        </p>

                        <a
                            href={newsurl}
                            target='_blank'
                            rel='noreferrer'
                            className='btn btn-primary'>
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
