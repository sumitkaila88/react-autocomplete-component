import React, { Component } from 'react';
import InputComponent from './components/Input/InputComponent' 

class SearchForm extends Component {

  state = { 
    value : ''
  }

  handleChange = (e) => {
    this.setState({
      value : e.target.value,
    });   
    console.log('FROM CHANGE', this.state.value);
  }
  handleSearchSubmit = (e) => {
    console.log(this.state.value);
    e.preventDefault();
  }


  render() { 
    return ( 
      <form onSubmit = {this.handleSearchSubmit}>
        <InputComponent inputType = 'text' inputValue = {this.state.value} inputName = 'search' changeHandler = {this.handleChange}/>
        <InputComponent inputType = 'reset' inputValue = 'reset' inputName = 'reset' />
        <InputComponent inputType = 'submit' inputValue = 'submit' inputName = 'submit' />
      </form>
     );
  }
}
 
export default SearchForm;