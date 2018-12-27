import React from 'react';
import Content from "./Content";
import Button from "./Button"
import Navbar from "./Navbar";

export default class Game extends React.Component {

    render() {

        console.log(this.props.question);
        console.log(this.props.score);

        if (this.props.question === undefined) {
            return(
                <div>
                    <Navbar/>
                    <h1>No hay preguntas en el servidor</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <Navbar/>
                    <h3>Su puntuación es: {this.props.score} ({this.props.score * 100 / this.props.questions.length} % de aciertos)</h3>

                    <Content question={this.props.question} onQuestionAnswer={this.props.onQuestionAnswer}/>

                    <Button question={this.props.question} questions={this.props.questions} onNextQuestion={this.props.onNextQuestion} onPreviousQuestion={this.props.onPreviousQuestion}
                        onSubmitQuestion={this.props.onSubmitQuestion}/>

                </div>
            );
        }

    }
}
