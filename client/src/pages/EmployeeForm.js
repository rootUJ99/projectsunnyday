import React, {useState} from 'react';
import './pages.css';
import Button from '../components/Button';
import Input from '../components/Input';

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
      <div className="center-container">
        <Input type="text" name="name" onChange={handleChange} value={formValue.name}/>
        <Input type="email" name="email"onChange={handleChange} value={formValue.email}/>
        <Input type="number" name="salary" onChange={handleChange} value={formValue.salary}/>
        <Button type="submit">Add Employee</Button>
      {'name' in data && <div className="notification">{data.name} added successfully</div>}
        </div>
      </form>
    </>
  )
}
export default EmployeeForm;