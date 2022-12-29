import React from "react"
import {connect} from "react-redux"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Card from 'react-bootstrap/Card'

class VotedQuestion extends React.Component {
    style_voted = {
        'margin': 'auto',
        'width': '90%',
        'padding': '1rem',
        'backgroundColor': 'lightseagreen',
        'borderRadius': '0.25rem  ',
        'marginTop': '1rem',
        'border': '1px solid grey'
    }
    style_notvoted = {
        'margin': 'auto', 'width': '90%', 'padding': '1rem',

        'borderRadius': '0.25rem  ', 'marginTop': '1rem', 'border': '1px solid grey'
    }
    style_vote_one = {
        'position': 'absolute',
        'backgroundColor': '#DFB52A',
        padding: '0.5rem',
        'borderRadius': '50%',
        'color': 'white',
        'textAlign': 'center',
        'fontWeight': '600',
        'marginLeft': '20rem'
    }
    style_vote_two = {
        'position': 'absolute',
        'backgroundColor': '#DFB52A',
        padding: '0.5rem',
        'borderRadius': '50%',
        'color': 'white',
        'textAlign': 'center',
        'fontWeight': '600',
        'marginLeft': '20rem',
    }

    render() {
        const {user, question} = this.props
        const total = this.props.optionOneSize + this.props.optionTwoSize
        const saclebarOne = this.props.optionOneSize
        const saclebarTwo = this.props.optionTwoSize
        const one = saclebarOne === 0 ? 0 : 100 * saclebarOne / total
        const two = saclebarTwo === 0 ? 0 : 100 * saclebarTwo / total
        const variant = 'Light'
        return (<div>
            <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{width: '40%', 'margin': 'auto', 'height': '25rem'}}
            >
                <Card.Header style={{display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between'}}>
                    <h3>{user.name}</h3>
                    <Card.Img variant="right" src={user.avatarURL}/>
                </Card.Header>
                <Card.Body>
                    <Card.Text as="div"
                               style={this.props.optionOneVote === true ? this.style_voted : this.style_notvoted}>
                        <div
                            style={this.props.optionOneVote === true ? this.style_vote_one : {'display': 'none'}}>Your
                            Vote
                        </div>
                        <h4>Would you rather be {question.optionOne.text}</h4>
                        <ProgressBar style={{'width': '70%', 'margin': 'auto', 'height': '1.5rem'}} now={one}
                                     label={`${one}%`}/>
                    </Card.Text>
                    <Card.Text as="div"
                               style={this.props.optionTwoVote === true ? this.style_voted : this.style_notvoted}>
                        <div
                            style={this.props.optionTwoVote === true ? this.style_vote_two : {'display': 'none'}}>Your
                            Vote
                        </div>
                        <h4>Would you rather be {question.optionTwo.text}</h4>
                        <ProgressBar style={{'width': '70%', 'margin': 'auto', 'height': '1.5rem',}} now={two}
                                     label={`${two}%`}/>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>)
    }
}

function mapStateToProps({questions, users}, props) {
    const {id} = props
    return {
        id,
        user: users[questions[id].author],
        question: questions[id],
        optionOneSize: questions[id].optionOne.votes.length,
        optionTwoSize: questions[id].optionTwo.votes.length,
        optionOneVote: questions[id].optionOne.votes.filter(vote => vote === questions[id].author).length > 0,
        optionTwoVote: questions[id].optionTwo.votes.filter(vote => vote === questions[id].author).length > 0
    }
}

export default connect(mapStateToProps)(VotedQuestion)
