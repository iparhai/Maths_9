import React from "react";
import AnswerModal from "./AnswerModal";
import { MathHelper } from "../utils";
import './Quiz.css'
import getURLParams from "../utils/getURLParams";
import Ex_1_1 from "./Grade_9/Real_And_Complex_Numbers/1.1/Ex_1_1";
import Ex_1_2 from "./Grade_9/Real_And_Complex_Numbers/1.2/Ex_1_2";

// import Shape from "./geometry/shape";
class Quiz extends React.Component {
  _isMounted = false;
  _secondsIntervalRef;
  state = {
    modal: "",
    modalShowing: false,
    streaks: 0,
    units: 0
  };
  earnLife = () => {
    this.props.onEarnLife();
    this.showModal("success", "STREAK!! You won a life ♥");
    this.setState({
      streaks: 0,
      units: this.state.units < 3 ? this.state.units + 1 : 2
    });
  };
  correctAnswer = () => {
    if (this.state.streaks > 2) {
      this.earnLife();
    } else {
      this.showModal("success");
    }
    this._isMounted && this.props.onCorretAnswer();
    this.setState(state => {
      return {
        streaks: state.streaks + 1
      };
    });
    setTimeout(() => {
      this._isMounted &&
        this.setState({
          modalShowing: false,

        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);
  };
  componentDidUpdate() {
    if (this.state.totalProblems > getURLParams.limit) {
      this.props.onEndGame()
    }
  }
  componentDidMount() {
    this._isMounted = true;

    // this.answerInput.focus();
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.lifes < 1) {
      this.props.onEndGame(this.state.points);
      return false;
    }
    return nextProps.lifes > -1;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  wrongAnswer = () => {
    this._isMounted && this.props.onWrongAnswer();
    this.setState({
      streaks: 0
    });
    this.showModal("error");
    setTimeout(() => {
      this._isMounted &&
        this.setState({
          modalShowing: false,
        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);
  };
  showModal = (type, text) => {
    this.setState({
      modal: <AnswerModal type={type} text={text} soundEffect={this.props.soundEffect} />,
      modalShowing: true
    });
  };

  renderGrade9GamifiedAssessments = (name) => {
    if (name.toLocaleLowerCase() == "ex_1_1") {
      return <Ex_1_1 onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    if (name.toLocaleLowerCase() == "ex_1_2") {
      return <Ex_1_2 onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
  }
  renderGame = (grade, name) => {
    if (grade == 9 || grade == "9") {
      return this.renderGrade9GamifiedAssessments(name)
    }
  }
  render() {
    return (
      <section className="show-up" style={{ width: "100%", height: "100vh" }}>
        <div >
          {this.state.modalShowing ? (
            this.state.modal
          ) : (
            <div>
              {this.renderGame(getURLParams.grade, getURLParams.assessName)}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Quiz;
