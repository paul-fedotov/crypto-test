// @flow
import React, { Component } from 'react';
import './style.css'

export default class Question extends Component {

  constructor(props){
    super(props);
    this.state = {
      q: {
        question: 'Hello, world!',
        answer1: 'AABBBAABAAABABAABABAABBABBABAAABBABBAAAAABABAAAABB',
        answer2: 'AABBBAABAAABABAABABAABBABBBBBBBABAAABBABBAAAAABABAAAABB'
      },
      test: {
        '1': {
          question: 'Hello, world!',
          answer1: 'AABBB AABAA ABABA ABABA ABBAB BABAA ABBAB BAAAA ABABA AAABB',
          answer2: 'AABBBAABAAABABAABABAABBABBBBBBBABAAABBABBAAAAABABAAAABB'
        },
        '2': {
          question: 'loREM ipSum dOlOr sIt AmeT, CoNSeCtetUR aDIpisciNg Elit, sED do eiusmod ' +
          'tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam,' +
          ' quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' +
          ' duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore' +
          ' eu fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident, ' +
          'sunt in culpa qui officia deserunt mollit anim id est laborum.',
          answer1: 'echo test',
          answer2: 'hello world'
        },
      }
    };
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate() {
    this.setState({q: this.state.test[this.props.params.question]});
  }

  render() {
    return (
        <div className="container">
          <br />
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="textQuestion">
                {this.state.q.question}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <div className="textAnswers">
                <label className="radio">
                  <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>
                  {this.state.q.answer1}
                </label>
                <label className="radio">
                  <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
                  {this.state.q.answer2}
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-lg-12">
              <br /><br />
              <button className="btn btn-primary">Reply</button>
            </div>
          </div>
        </div>
    );
  }
}
