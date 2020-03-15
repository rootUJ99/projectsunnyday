import React, {useState} from 'react';
const EmployeeForm = () => {
  const [formValue, setFormValues] = useState({
    name: '',
    email: '',
    salary:'',
  });
  const [data, setData] = useState({});
  const handleChange = (e) => {
    setFormValues({
      ...formValue,
      [e.target.name] : e.target.value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.values(formValue).includes('')) {
      const response = await fetch('http://localhost:3000/api/create', {
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
  console.log(data);

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={formValue.name}/>
        <input type="text" name="email"onChange={handleChange} value={formValue.email}/>
        <input type="number" name="salary" onChange={handleChange} value={formValue.salary}/>
        <button type="submit">Add Employee</button>
      </form>
      {'name' in data && <div>{data.name} added successfully</div>}
    </>
  )
}
export default EmployeeForm;