import React from 'react';
import logo from './logo.svg';
import './App.css';
class InputReturn extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: 'check'};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event){
    this.setState({value: event.target.value});
  }
  handleSubmit(event){
    alert('Input text: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit = {this.handleSubmit}> 
        <label>
         <input placeholder="Input text here" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Show" />
        </form>
    <span> Text: {this.state.value}</span>
      </div>
    );
    
  }
}


export default InputReturn;
