import React, {useState} from 'react';
import './pages.css';
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
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
  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className='center-container'>
            <Input
              type='number'
              name='salary'
              onChange={handleChange}
              value={formValue.salary}
            />
            <Select
              name='operator'
              options= {[
                {
                  label: 'less than',
                  value:'lt'
                },
                {
                  label: 'greater than',
                  value:'gt'
                },
              ]}
              onChange={handleChange}
              placeholder ="select value"
            >
            </Select>
            <Button type='submit'>Search</Button>
            <>
            {!!data.length && data.map(it => <div className="list">
            {it.name} | 
            {it.email} | 
            {it.salary}
            </div>
            )}
            </>
          </div>
        </form>
    </>
  );
}
export default FilterEmployeeForm;
