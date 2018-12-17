import React from 'react';
import Question from "./Question";
import Tips from "./Tips"
import Answer from "./Answer";

export default class Content extends React.Component {
    render() {
        return (
            <div>
                <Question question={this.props.question}/>

                <Tips question={this.props.question} />

                <img src={this.props.question.attachment.url} alt={'Imagen no disponible'} />

                <Answer question={this.props.question} onQuestionAnswer={this.props.onQuestionAnswer}/>
            </div>
        )
    }
}
