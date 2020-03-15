import React, {useState} from 'react';
const FilterEmployeeForm = () => {
  const [formValue, setFormValues] = useState({
    salary:'',
    operator: '',
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name] : e.target.value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.values(formValue).includes('')) {
      const response = await fetch('http://localhost:3000/api/filter', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formValue),
      });
      const jsonRes = await response.json();
      console.log(jsonRes);
      if (jsonRes && jsonRes.status === 'success') {
        setData(jsonRes.data);
      }
    }
  }
  console.log(formValue);
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="number" name="salary" onChange={handleChange} value={formValue.salary}/>
        <select name="operator" onChange={handleChange} value={formValue.operator}>
          <option value="lt">less than</option>
          <option value="gt">grater than</option>
        </select>
        <button type="submit">Add Employee</button>
  {!!data.length && data.map(it => <span>{it.name}</span>)}

      </form>
    </>
  )
}
export default FilterEmployeeForm;
