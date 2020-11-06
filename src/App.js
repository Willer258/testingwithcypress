import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false,
    };
  }

  render() {
    return (
      <Fragment className="margin">
        <h1>Hello world</h1>
        <p className="text-test">Ce texte est bleu !</p>
        <button
          onClick={() =>
            this.setState({ buttonClicked: !this.state.buttonClicked })
          }
          className={this.state.buttonClicked ? "button-green" : "button-red"}
        >
          {this.state.buttonClicked ? "Activé" : "Désactivé"}
        </button>
      </Fragment>
    );
  }
}

export default App;
