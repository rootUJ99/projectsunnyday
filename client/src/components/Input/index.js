import React from 'react';
import './styles.css';
const Input = ({label, ...props}) => (
  <input {...props} className="inpt" placeholder={props.name}/>
);

export default Input;