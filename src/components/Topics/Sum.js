import React, {Component} from 'react'

export default class Sum extends Component{
  render(){
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input  className="inputLine" onChange={(e) => this.handleInput1(e.target.value)}></input>
        <input  className="inputLine" onChange={(e) => this.handleInput2(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.sum(this.state.num1, this.state.num2)}> Add </button>
        <span className="resultsBox">Sum: {this.state.sum}</span>
      </div>
    )
  }
  constructor(){
    super()

    this.state={
      number1: 0,
      number2: 0,
      sum: null
    }
  }
  handleInput2(value){
    this.setState({num2: value})
  }
  handleInput1(value){
    this.setState({num1: value})
  }
  sum(num1, num2){
    this.setState({sum: parseInt(num1, 10) + parseInt(num2, 10)})
  }
}