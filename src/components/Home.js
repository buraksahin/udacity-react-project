import React, {Fragment} from 'react'
import AnsweredQuestions from "./AnsweredQuestions";
import UnAnsweredQuestions from "./UnansweredQuestions";
import {connect} from 'react-redux';

class Home extends React.Component {
    state = {
        selectedQuestion: true
    }

    answered = () => {
        this.setState({
            selectedQuestion: true
        })
    }

    unanswered = () => {
        this.setState({
            selectedQuestion: false
        })
    }

    render() {
        return (<Fragment>
            <div className="home-dashboard">
                {this.state.selectedQuestion === true ? <div className="home-questions">
                    <div onClick={this.answered} style={{'backgroundColor': '#fa1aa4'}}
                         className="answered-questions">Answered Questions
                    </div>
                    <div onClick={this.unanswered} className="unanswered-questions">Unanswered Questions</div>
                </div> : <div className="home-questions">
                    <div onClick={this.answered} className="answered-questions">Answered Questions</div>
                    <div onClick={this.unanswered} style={{'backgroundColor': '#fa1aa4'}}
                         className="unanswered-questions">Unanswered Questions
                    </div>
                </div>}
                {this.state.selectedQuestion === true ? <AnsweredQuestions/> : <UnAnsweredQuestions/>}
            </div>
        </Fragment>)
    }
}

function mapStateToProps({authedUser}) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(Home);