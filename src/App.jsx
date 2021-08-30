import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import News from './components/News'
import LandingPage from './components/LandingPage'

export default class App extends Component {
    pageSize = 9

    render() {
        return (
            <Fragment>
                <Router>
                    <NavBar />
                    <div className='container' style={{ marginTop: '4rem' }}>
                        <Switch>
                            <Route exact path='/'>
                                <LandingPage />
                            </Route>

                            <Route exact path='/business'>
                                <News
                                    key='business'
                                    title='Business'
                                    pageSize={this.pageSize}
                                    country='in'
                                    category='business'
                                />
                            </Route>
                            <Route exact path='/entertainment'>
                                <News
                                    key='entertainment'
                                    title='Entertainment'
                                    pageSize={this.pageSize}
                                    country='in'
                                    category='entertainment'
                                />
                            </Route>
                            <Route exact path='/general'>
                                <News
                                    key='general'
                                    title='Home'
                                    pageSize={this.pageSize}
                                    country='in'
                                    category='general'
                                />
                            </Route>
                            <Route exact path='/health'>
                                <News
                                    key='health'
                                    title='Health'
                                    pageSize={this.pageSize}
                                    country='in'
                                    category='health'
                                />
                            </Route>
                            <Route exact path='/science'>
                                <News
                                    key='science'
                                    title='Science'
                                    pageSize={this.pageSize}
                                    country='in'
                                    category='science'
                                />
                            </Route>
                            <Route exact path='/sports'>
                                <News
                                    key='sports'
                                    title='Sports'
                                    pageSize={this.pageSize}
                                    country='in'
                                    category='sports'
                                />
                            </Route>
                            <Route exact path='/technology'>
                                <News
                                    key='technology'
                                    title='Technology'
                                    pageSize={this.pageSize}
                                    country='in'
                                    category='technology'
                                />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </Fragment>
        )
    }
}
