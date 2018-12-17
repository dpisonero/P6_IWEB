import React from 'react';

export default class Tips extends React.Component {

    aux() {
        return this.props.question.tips.map((tip) => {
            return (
                <li key={tip}>{tip}</li>
            )
        });
    }

    render() {

        let tips = this.props.question.tips;
        let showTips = "";
        if (tips.length === 0) {
            showTips = "No hay tips";
        }

        if (tips.length === 0) {
            return (
                <div className= "No pistas">
                    <h3>Pistas</h3>
                    <h5>{showTips}</h5>
                </div>
            )
        } else {
                return (
                    <div className="Pistas">
                        <h3>Pistas</h3>
                        <p>{this.aux()}</p>
                    </div>
                )
        }
    }
}