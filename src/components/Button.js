import React from 'react';
import { questions } from "../assets/mock-data";

export default class Button extends React.Component {

    render() {

        switch (this.props.question) {
            case questions[0]:
                return(
                    <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                );
            case questions[questions.length - 1]:
                return(
                    <button id="next" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
                );
            default:
               return(
                   <div>
                       <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                       <button id="next" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
                   </div>
               )
        }

/*
        if(questions[0] === this.props.question) {
            return(
                <div>
                    <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                </div>
            )

        } else {
            return(
                <div>
                    <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
                    <button id="next" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
                </div>
            )
        }
/*
        if (this.props.onAction === this.props.onNextQuestion) {
            return(
                <button id="next" onClick = {() => {this.props.onNextQuestion()}}> Siguiente pregunta </button>
            )
        } else if (this.props.onAction === this.props.onPreviousQuestion) {
            return(
                <button id="next" onClick = {() => {this.props.onPreviousQuestion()}}> Pregunta anterior </button>
            )
        } else {
            return(
                <button id="submit" onClick={() => {this.props.onSubmit(this.props.questions)}}>Evaluar respuestas</button>
            )
        }
*/
    }
}
