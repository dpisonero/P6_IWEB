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
    }
}
