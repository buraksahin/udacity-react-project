import React, {Fragment} from "react"
import Home from "./Home"
import NewQuestions from "./NewQuestion"
import Question from "./Question"
import LeaderBoard from "./LeaderBoard"
import NavTab from "./NavTab"
import {PageNotFound} from "./PageNotFound"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

class VoteApp extends React.Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className='container'>
                        <NavTab/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/add' component={NewQuestions}/>
                            <Route path='/questions/:id' component={Question}/>
                            <Route path='/leaderboard' component={LeaderBoard}/>
                            <Route component={PageNotFound}/>
                        </Switch>
                    </div>
                </Fragment>
            </Router>
        )
    }
}

export default VoteApp