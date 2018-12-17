import React from 'react';
import Button from "./Button";

export default class Actionbar extends React.Component {

    render() {
        return(
            <div>
                <Button question={this.props.question} onNextQuestion={this.props.onNextQuestion} onPreviousQuestion={this.props.onPreviousQuestion}/>
            </div>
        )
    }
}
