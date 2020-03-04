import React from 'react';

const InputComponent = (props) => {
  return (
    <input 
        type = {props.inputType} 
        name = {props.inputName} 
        value = {props.inputValue}
        onChange = {props.changeHandler}>
      </input>
  )
}

export default InputComponent;