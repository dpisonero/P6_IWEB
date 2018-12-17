import React from 'react';
import Content from "./Content";
import Actionbar from "./Actionbar";

export default class Game extends React.Component {

    render() {

        console.log(this.props.question);

        if (this.props.question === undefined) {
            return(
                <h1>No hay preguntas en el servidor</h1>
            )
        } else {
            return (
                <div>
                    <Content question={this.props.question} onQuestionAnswer={this.props.onQuestionAnswer}/>

                    <Actionbar question={this.props.question} onNextQuestion={this.props.onNextQuestion} onPreviousQuestion={this.props.onPreviousQuestion}/>

                </div>
            );
        }

    }
}
