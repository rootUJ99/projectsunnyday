import React, { useState } from 'react';
import './app.css';
import Button from './components/Button';
import EmployeeForm from './pages/EmployeeForm';
import FilterEmployeeForm from './pages/FilterEmployeeForm';
const App = () => {
  const [currentSceen , setCurrentScreen] = useState('create')
  return (
    <>
      <div className='container'>
        <div className="card">
          <div className='flex-container '>
            <Button onClick={() => setCurrentScreen("create")}>
              Create Employee
            </Button>
            <Button onClick={() => setCurrentScreen("search")}>
              Search By Salary
            </Button>
          </div>
          {currentSceen === "create" && <EmployeeForm />}
          {currentSceen === "search" && <FilterEmployeeForm />}
        </div>
      </div>
    </>
  );
}

export default App;
