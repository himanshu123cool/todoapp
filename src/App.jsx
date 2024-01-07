import React, { useState } from "react";
import Heading from "./Heading";
import Addnote from './Addnote';
import Items from "./Items";
import EmptyMessage from "./EmptyMessage";

function App() {

  const [newItem, setNewItem] = useState([]);
  
  const handleItemValue = (itemName, itemDate)=>{
    const newTodoItems = [...newItem, {name:itemName, date : itemDate}]
    setNewItem(newTodoItems);
  }


  const handleDeleteItem = (itemName)=>{
    const newDeleteTodoItems = newItem.filter(item=>item.name!==itemName)
      setNewItem(newDeleteTodoItems);

  }

  return (
    <>
      <div className="container-fluid" id="todo_container">
        <div className="container">
         <Heading/>
        <Addnote OnNewItem={handleItemValue}/>
        {newItem.length===0 && <EmptyMessage/>}
        <Items newItem={newItem} itemDelete={handleDeleteItem}/> 
        </div>
      </div>
    </>
  );
}

export default App;
