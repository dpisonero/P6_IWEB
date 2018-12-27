import React from 'react';
import { questions } from "../assets/mock-data";

export default class Button extends React.Component {

    render() {

        switch (this.props.question) {
            case questions[0]:
                return(
                    <div>
                        <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                        <button id="submit" onClick={() => {this.props.onSubmitQuestion(this.props.questions)}}>Evaluar las respuestas</button>
                    </div>
                );
            case questions[questions.length - 1]:
                return(
                    <div>
                        <button id="next" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
                        <button id="submit" onClick={() => {this.props.onSubmitQuestion(this.props.questions)}}>Evaluar las respuestas</button>
                    </div>
                );
            default:
               return(
                   <div>
                       <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                       <button id="previous" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
                       <button id="submit" onClick={() => {this.props.onSubmitQuestion(this.props.questions)}}>Evaluar las respuestas</button>
                   </div>
               )
        }
    }
}
