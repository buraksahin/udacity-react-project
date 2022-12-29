import React from "react";
import {connect} from "react-redux";

class LeaderBoard extends React.Component {
    render() {
        const variant = 'Light'
        const {usersList} = this.props

        return (
            <div className="leader-board-container">
                {usersList.map(user => (
                    <div key={user.id} className="leader-score-body">

                        <div className="leader-text">
                            <div>
                                <h4>Answered Questions {Object.keys(user.answers).length}</h4>
                            </div>
                            <div>
                                <h4>Unanswered Questions {user.questions.length}</h4>
                            </div>
                        </div>
                        <div className="leader-score-header">
                            <h2>{user.name}</h2>
                            <img src={user.avatarURL} alt=""/>
                        </div>
                        <div  key={variant} className="leader-score">
                            <h2>Score</h2>
                            <div className="leader-totalscore">
                                {user.questions.length + Object.keys(user.answers).length}
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        )
    }
}

function mapStateToProps({users}) {
    return {
        usersList: Object.values(users).sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length))
    }
}

export default connect(mapStateToProps)(LeaderBoard);