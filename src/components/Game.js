import React from 'react';
import Content from "./Content";

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

                    <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>

                    <button id="previous" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>

                    <button id="submit" onClick={() => {this.props.onSubmit(this.props.questions)}}>Evaluar respuestas</button>

                </div>
            );
        }

    }
}
