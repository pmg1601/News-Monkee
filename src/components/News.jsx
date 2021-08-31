import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// import articles from '../data'
import NewsItem from './NewsItem'
import image from '../images/news_image.jpg'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

/* -------------------------------------------------------------------------- */
const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // Updated news page for - next, prev, at start
    async function updateNews() {
        props.setProgress(10)

        const URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3fd2dfd5b9cf42b287f86cd58cd34cfa&page=${page}&pageSize=${props.pageSize}`

        setLoading(true)

        try {
            const data = await fetch(URL)
            props.setProgress(30)

            const parsedData = await data.json()
            props.setProgress(70)

            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)

            props.setProgress(100)
        } catch (err) {
            setArticles([])
            setTotalResults(0)
            setLoading(false)
        }
    }

    // Runs after render method - Mount at start
    useEffect(() => {
        document.title = `News Monkee | ${props.title}`
        updateNews()
        // eslint-disable-next-line
    }, [])

    // Fetch data for infinite scroll
    const fetchMoreData = async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${
            props.country
        }&category=${
            props.category
        }&apiKey=3fd2dfd5b9cf42b287f86cd58cd34cfa&page=${page + 1}&pageSize=${
            props.pageSize
        }`

        setPage(page + 1)

        try {
            const data = await fetch(URL)
            const parsedData = await data.json()

            setArticles(articles.concat(parsedData.articles))
            setTotalResults(parsedData.totalResults)
        } catch (err) {
            setArticles([])
            setTotalResults(0)
        }
    }

    /* -------------------------------------------------------------------------- */

    return (
        <div className='my-5'>
            <h1 className='text-center'>
                Top Headlines{' '}
                {props.title && props.title !== 'Home' && ` - ${props.title}`}
            </h1>

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}>
                <div className='row container'>
                    {articles ? (
                        // News Item Component
                        <Fragment>
                            {articles.map((article) => (
                                <div
                                    key={article.url}
                                    className='col-sm-6 col-md-6 col-lg-4'>
                                    <NewsItem
                                        title={
                                            article.title
                                                ? article.title.slice(0, 80) +
                                                  '...'
                                                : 'No Title'
                                        }
                                        desc={
                                            article.description
                                                ? article.description.slice(
                                                      0,
                                                      80
                                                  ) + '...'
                                                : 'No Description'
                                        }
                                        imgurl={
                                            article.urlToImage
                                                ? article.urlToImage
                                                : image
                                        }
                                        newsurl={article.url}
                                        author={article.author}
                                        date={article.publishedAt}
                                        source={article.source.name}
                                    />
                                </div>
                            ))}

                            {/* Next-Previous Buttons */}
                            {/* Removed! */}
                        </Fragment>
                    ) : (
                        !loading && (
                            <h3 className='mt-5'>"No News, Go corona Go!"</h3>
                        )
                    )}
                </div>
            </InfiniteScroll>
        </div>
    )
}

// Default Props
News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
}

// Prop Types
News.propsTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
