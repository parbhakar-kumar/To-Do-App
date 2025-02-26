import { useState } from 'react'
import React from 'react'
import './App.css'
import RegistrationForm from './component/RegistrationForm'
import Table from './component/Table'


function App() {
  const [data, setData] = useState([]);
  const [isFormvisibal, setFormvisibl]=useState(false);
  const [editIndex,setEditIndex]=useState(null)

  const handleAdd = () => {
    setEditIndex(null);
    setFormvisibl(true);
  };
  
  const handleEdit = (index) => {
    setEditIndex(index);
    setFormvisibl(true);
  };
  
  const handleDelete = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };
  
  const handleSubmit = (formData) => {
    if (editIndex !== null) {
      const updatedData = data.map((item, i) => 
        i === editIndex ? formData : item
      );
      setData(updatedData);
    } else {
      setData([...data, formData]);
    }
    setFormvisibl(false);
  };
  const hendlCancel=()=>{
    setFormvisibl(false)
  }

  return (
    <div>
       <h1 className="bg-amber-500 text-5xl text-center">To-Do-App</h1>
        <button onClick={handleAdd} className="bg-amber-400 mt-1 mb-1 mr-1 ml-1 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded">New Registration</button>
        <Table data={data} onEdit={handleEdit} onDelete={handleDelete} />
        
        {isFormvisibal && (
          <RegistrationForm
            onSubmit={handleSubmit}
            oncancel={hendlCancel}
            initialData={editIndex !== null ? data[editIndex] : null}
          />
        )}

    </div>
       

  )
}

export default App
