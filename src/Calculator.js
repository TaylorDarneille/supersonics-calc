import './App.css';
import { Component } from 'react';

class Calculator extends Component {
  state = {
    num1: null,
    num2: null,
    sum: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: parseInt(e.target.value)})
  }

  calculateSum = () => {
    this.setState({sum : this.state.num1 + this.state.num2})
  }

  render(){
    return(
      <div className="container">
          <h1>Add with React!</h1>
          <div className="add">
          <input 
            type="number" 
            onChange={this.handleChange} 
            name='num1' 
            value={this.state.num1}
          />
          <span>+</span>
          <input 
            type="number" 
            onChange={this.handleChange} 
            name='num2' 
            value={this.state.num2}
          />
          <button onClick={this.calculateSum}>=</button>
          <h3>{this.state.sum}</h3>
          </div>
      </div>
    )
  }
}

export default Calculator;
