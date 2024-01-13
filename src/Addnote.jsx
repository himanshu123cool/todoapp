import React from 'react'
import { useState } from 'react'

function Addnote({OnNewItem}) {

  const [todoName, setName] = useState();
  const [todoDate, setDate] = useState();

  const handleNameValue = (event)=>{
    setName(event.target.value);
  }
  const handleDateValue = (event)=>{
    setDate(event.target.value);
  }

  const handleTodoValue = (event)=>{
    event.preventDefault();
    OnNewItem(todoName, todoDate);
    setName("");
    setDate("");
  }

  return (
    <>
     <form className="row py-4 mb-2" id="add_box" onSubmit={handleTodoValue}>
            <div className="col-12 col-sm-6 col-md-6">
              <input
                className="form-control py-2 border border-dark"
                type="text"
                placeholder="Add Task" value={todoName} required onChange={handleNameValue}
            />
            </div>
            <div className="col-12 col-sm-3 col-md-4">
              <input className="form-control py-2 border border-dark" type="date" value={todoDate} required onChange={handleDateValue}/>
            </div>
            <div className="col-12 col-sm-3 col-md-2">
              <button className="btn btn-dark w-100 py-2">Add Task</button>
            </div>
          </form> 
    </>
  )
}

export default Addnote
