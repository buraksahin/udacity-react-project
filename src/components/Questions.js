import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Questions extends React.Component{
    render(){
        const {questionList,users}=this.props
        return(
            <div>
               <ul>
                {
                    questionList.map((question)=>(
                        <li key={question.id}>
                        <div className="question-card">
                                <div className="question-author">
                                    <span >
                                        {users[question.author].name} asks :
                                    </span>
                                </div>
                               <div className="question-main">
                                    <div className="question-avatar">
                                        <img alt='' src={users[question.author].avatarURL}/>
                                    </div>
                                    <div className="question-question">
                                        <span className="question-text">Would you rather</span>
                                        <span className="question-option">...{question.optionOne.text}...</span>
                                       { 
                                        <Link className="question-link" to={`/questions/${question.id}`}> View Poll</Link>
                                     
                                       }
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
               </ul>
            </div>
        )
    }
}
function mapStateToProps({users},{values}){
    return{
       questionList:values===null||values===undefined?[]:values.sort((a,b)=>b.timestamp-a.timestamp),
    users
    }

}
export default connect(mapStateToProps)(Questions);