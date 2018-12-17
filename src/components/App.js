import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Game from "./Game";
import { questionAnswer } from "../redux/actions";
import { changeQuestion } from "../redux/actions";
import { submit } from "../redux/actions";

class App extends Component {
    render() {
        console.log(this.props.questions[this.props.currentQuestion]);
        return (
            <div>
                <Game question={this.props.questions[this.props.currentQuestion]}

                      onQuestionAnswer={(answer) => {
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}

                      onNextQuestion={() => {
                          this.props.dispatch(changeQuestion(this.props.currentQuestion + 1))
                      }}

                      onPreviousQuestion={() => {
                          this.props.dispatch(changeQuestion(this.props.currentQuestion - 1))
                      }}

                      onSubmit = {(questions) => {
                          this.props.dispatch(submit(questions))
                      }}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(App);
