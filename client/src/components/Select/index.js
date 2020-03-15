import React from 'react';
import './styles.css';
const Select = ({options, ...props}) => (
  <select {...props} className="slet">
    <option value="" disabled selected>Select your option</option>
  {
    options.map(it => (<option value={it.value} key={it.value}> {it.label}</option>))
  }
  </select>
);

export default Select;