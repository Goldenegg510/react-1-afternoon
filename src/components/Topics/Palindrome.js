import React, {Component} from 'react'

export default class Palindrome extends Component{
  checkPalindrome(value){
      let palindrome = "false";
      let valueArr = [...value]
      let reversed = valueArr.reverse()
      let reverseStr = reversed.join('')
      if (value === reverseStr){
        palindrome = "true";
      }
      this.setState({palindrome: palindrome})
    }
    handleChange(value){
      this.setState({userInput: value})
    }

  render(){
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
          <button className="confirmationButton"onClick={() => this.checkPalindrome(this.state.userInput)}>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
  
  constructor(){
    super()

    this.state={
      userInput: '',
      palindrome: ''
    }
  }
}