import React, {Component} from 'react'

export default class FilterString extends Component{
  render(){
    return(
      <div className="puzzleBox filterStringPB">
      <h4> Filter String </h4>
        <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filterString, null, 10)}</span>
      </div>
    )
  }
  
  filterString(input){
    let filteredStrings = []
    for (let i = 0; i < this.state.unFilteredArray.length; i++){
      if(this.state.unFilteredArray[i].includes(input)){
        filteredStrings.push(this.state.unFilteredArray[i])
      }
    }
    this.setState({filterString: filteredStrings})
  }

  handleChange(val){
    this.setState({userInput: val})
  }
  constructor(){
    super()

    this.state = {
      unFilteredArray: ['jake', 'jared', 'jeremy', 'ben', 'harrold'],
      userInput: '',
      filteredString: []
    }
  }
}