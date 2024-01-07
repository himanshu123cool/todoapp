import React from 'react'
import NewItems from './NewItems'

function Items( {newItem, itemDelete}) {
  return (
    <>
    {newItem.map((myValue)=>{
      return(
        <NewItems myTodoValue={myValue} itemDelete={itemDelete}/>
      )
    })}
    </>
  )
}

export default Items
