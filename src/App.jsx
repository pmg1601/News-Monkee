import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import News from './components/News'
import LandingPage from './components/LandingPage'
import LoadingBar from 'react-top-loading-bar'

const App = () => {
    let pageSize = 9

    const [progress, setProgress] = useState(0)

    return (
        <Fragment>
            <Router>
                <NavBar />
                <LoadingBar color='#f11946' progress={progress} />

                <div className='container' style={{ marginTop: '4rem' }}>
                    <Switch>
                        <Route exact path='/'>
                            <LandingPage />
                        </Route>

                        <Route exact path='/business'>
                            <News
                                setProgress={setProgress}
                                key='business'
                                title='Business'
                                pageSize={pageSize}
                                country='in'
                                category='business'
                            />
                        </Route>
                        <Route exact path='/entertainment'>
                            <News
                                setProgress={setProgress}
                                key='entertainment'
                                title='Entertainment'
                                pageSize={pageSize}
                                country='in'
                                category='entertainment'
                            />
                        </Route>
                        <Route exact path='/general'>
                            <News
                                setProgress={setProgress}
                                key='general'
                                title='Home'
                                pageSize={pageSize}
                                country='in'
                                category='general'
                            />
                        </Route>
                        <Route exact path='/health'>
                            <News
                                setProgress={setProgress}
                                key='health'
                                title='Health'
                                pageSize={pageSize}
                                country='in'
                                category='health'
                            />
                        </Route>
                        <Route exact path='/science'>
                            <News
                                setProgress={setProgress}
                                key='science'
                                title='Science'
                                pageSize={pageSize}
                                country='in'
                                category='science'
                            />
                        </Route>
                        <Route exact path='/sports'>
                            <News
                                setProgress={setProgress}
                                key='sports'
                                title='Sports'
                                pageSize={pageSize}
                                country='in'
                                category='sports'
                            />
                        </Route>
                        <Route exact path='/technology'>
                            <News
                                setProgress={setProgress}
                                key='technology'
                                title='Technology'
                                pageSize={pageSize}
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

export default App
