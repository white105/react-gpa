import React, { Component } from 'react';
import './App.css';

class GPACalculator extends Component {

  constructor() {
    super()

    this.state = {
      total_gpa : 0,
      num_rows: 5
    }

    this.addClass = this.addClass.bind(this)
    this.calculate = this.calculate.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.renderRow = this.renderRow.bind(this)
    this.reset = this.reset.bind(this)
  }

  componentDidMount() {

  }


  addClass() {
    this.setState({ num_rows : this.state.num_rows + 1})
  }

  calculate() {

    /*

    GPA formula

    total points / credits attempted = GPA

    to calculate course points = num_credits * gpa

    */

    console.log('calculating gpa...')
  }

  renderRow() {

  }

  reset() {

  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render() {


    return (
      <div className="App">
        <h1>GPA Calculator</h1>


        <div className='calculator'>

          <div className='column' id='column1'>
            <h3>Course</h3>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
          </div>

          <div className='column' id='column2'>
            <h3>GPA</h3>
            <input type='text' className='gpaInput' name='gpa1' onChange={this.handleInputChange}></input>
            <input type='text' className='gpaInput' name='gpa2' onChange={this.handleInputChange}></input>
            <input type='text' className='gpaInput' name='gpa3' onChange={this.handleInputChange}></input>
            <input type='text' className='gpaInput' name='gpa4' onChange={this.handleInputChange}></input>
            <input type='text' className='gpaInput' name='gpa5' onChange={this.handleInputChange}></input>
          </div>


          <div className='column' id='column3'>
            <h3>Credits</h3>
            <input type='text' className='creditsInput' name='credits1' onChange={this.handleInputChange} ></input>
            <input type='text' className='creditsInput' name='credits2' onChange={this.handleInputChange}></input>
            <input type='text' className='creditsInput' name='credits3' onChange={this.handleInputChange}></input>
            <input type='text' className='creditsInput' name='credits4' onChange={this.handleInputChange}></input>
            <input type='text' className='creditsInput' name='credits5' onChange={this.handleInputChange}></input>
          </div>


        </div>

        <div className='buttonsDiv'>

          <button className='button' id='addClassButton' onClick={this.addClass}>Add class</button>
          <button className='button' id='calculateButton' onClick={this.calculate}>Calculate</button>
          <button className='button' id='resetButton' onClick={this.reset}>Reset Fields</button>

        </div>

        <h3 className='gpaHeader'>Your GPA is {this.state.total_gpa}</h3>

      </div>
    );
  }
}

export default GPACalculator;
