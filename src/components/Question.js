import React from 'react';

export default class Question extends React.Component {

    render() {
        if (this.props.question.question === undefined) {
            return(
                <h1>No hay preguntas para mostrar</h1>
            )
        } else {

        }
        return(
            <h1>{this.props.question.question}</h1>
        )
    }
}
