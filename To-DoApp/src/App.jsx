import { useState } from 'react'
import React from 'react'
import './App.css'
import Table from './component/Table'
import RegistrationForm from './component/RegistrationForm'

function App() {
  const [data, setData] = useState([]);
  const [formvisibal, setFormvisibl]=useState(false);
  const [editIndex,setEditIndex]=useState(null)

  const hendlAdd=()=>{
    setEditIndex(null);
    formvisibal(true)
  };
  const hendlEdit=()=>{
    setEditIndex(index);
    setFormvisibl(true)
  };
  const hendldelete=()=>{
    const newData = data.filter((_,i )=>i!==index);
    setData(newData);

  };
  const hendlesubmit=()=>{
    if(editIndex!==null){
      const updateData =data.map((Item,index)=>index===editIndex?FormData:Item);
    }else{
      setData([...data,FormData])
    }
    setFormvisibl(false)

  }
  const hendlCancel=()=>{
    setFormvisibl(false)
  }

  return (
    <div>
       <h1 class="bg-amber-500 text-5xl text-align: center;" >To-Do</h1>
        <button onClick={ hendlAdd } class="bg-amber-400   hover:bg-amber-600 text-white font-bold py-2 px-4 rounded" >New Registration</button>
        <Table data={data} onEdit={hendlEdit} onDelete={hendldelete} />
         (
          <RegistrationForm 
            onSubmit={hendlesubmit} 
            onCancel={hendlCancel} 
            initialData={editIndex !== null ? data[editIndex] : null} 
          />
        )

    </div>
       

  )
}

export default App
