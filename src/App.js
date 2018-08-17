import React, { Component } from 'react';
import './App.css';

class GPACalculator extends Component {

  constructor() {
    super()

    this.state = {
      GPA : 0,

    }

    this.calculate = this.calculate.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  calculate() {

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

          <div className='column1'>
            <h3>Course</h3>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
            <input type='text' className='courseInput' ></input>
          </div>

          <div className='column2'>
            <h3>GPA</h3>
            <input type='text' className='gpaInput'></input>
            <input type='text' className='gpaInput'></input>
            <input type='text' className='gpaInput'></input>
            <input type='text' className='gpaInput'></input>
            <input type='text' className='gpaInput'></input>
          </div>



          <div className='column3'>
            <h3>Credits</h3>
            <input type='text' className='creditsInput'></input>
            <input type='text' className='creditsInput'></input>
            <input type='text' className='creditsInput'></input>
            <input type='text' className='creditsInput'></input>
            <input type='text' className='creditsInput'></input>
          </div>


        </div>

        <button className='calculateButton' onClick={this.calculate}>Calculate</button>

        <h3 className='gpaHeader'>Your GPA is {this.state.GPA}</h3>

      </div>
    );
  }
}

export default GPACalculator;
