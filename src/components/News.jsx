import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

// import articles from '../data'
import NewsItem from './NewsItem'
import image from '../images/news_image.jpg'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

/* -------------------------------------------------------------------------- */
export default class News extends Component {
    // Default Props
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: 'general'
    }

    // Prop Types
    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    // Constructor
    constructor(props) {
        super(props) // Mandatory

        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }

        document.title = `News Monkee | ${this.props.title}`
    }

    // Updated news page for - next, prev, at start
    async updateNews() {
        const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3fd2dfd5b9cf42b287f86cd58cd34cfa&page=${this.state.page}&pageSize=${this.props.pageSize}`

        this.setState({
            loading: true
        })

        try {
            const data = await fetch(URL)
            const parsedData = await data.json()

            this.setState({
                articles: parsedData.articles,
                loading: false,
                totalResults: parsedData.totalResults
            })
        } catch (err) {
            this.setState({
                articles: [],
                loading: false,
                totalResults: 0
            })
        }
    }

    // Runs after render method - Mount at start
    async componentDidMount() {
        await this.updateNews()
    }

    // Fetch data for infinite scroll
    fetchMoreData = async () => {
        const URL = `https://newsapi.org/v2/top-headlines?country=${
            this.props.country
        }&category=${
            this.props.category
        }&apiKey=3fd2dfd5b9cf42b287f86cd58cd34cfa&page=${
            this.state.page + 1
        }&pageSize=${this.props.pageSize}`

        this.setState({ page: this.state.page + 1 })

        try {
            const data = await fetch(URL)
            const parsedData = await data.json()

            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults
            })
        } catch (err) {
            this.setState({
                articles: [],
                totalResults: 0
            })
        }
    }

    /* -------------------------------------------------------------------------- */

    render() {
        return (
            <div className='my-4'>
                <h1>
                    Top Headlines{' '}
                    {this.props.title &&
                        this.props.title !== 'Home' &&
                        ` - ${this.props.title}`}
                </h1>

                {this.state.loading && <Spinner />}

                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={
                        this.state.articles.length !== this.state.totalResults
                    }
                    loader={<Spinner />}>
                    <div className='row container'>
                        {this.state.articles ? (
                            // News Item Component
                            <Fragment>
                                {this.state.articles.map((article) => (
                                    <div
                                        key={article.url}
                                        className='col-sm-6 col-md-6 col-lg-4'>
                                        <NewsItem
                                            title={
                                                article.title
                                                    ? article.title.slice(
                                                          0,
                                                          60
                                                      ) + '...'
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
                            !this.state.loading && (
                                <h3 className='mt-5'>
                                    "No News, Go corona Go!"
                                </h3>
                            )
                        )}
                    </div>
                </InfiniteScroll>
            </div>
        )
    }
}
