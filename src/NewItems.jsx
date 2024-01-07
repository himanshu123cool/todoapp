import React from 'react'

function NewItems( {myTodoValue, itemDelete}) {
  return (
    <>
     <div className="row">
            <div className="col-12 mb-2 py-3 px-4 list_box">
                <div className="row d-flex justify-content-evenly">
                    <div className="col-6 col-sm-7 col-md-8 bg-light d-flex align-items-center py-2">
                        <p className="fw-bold mb-0 fs-6">{myTodoValue.name}</p>
                    </div>
                    <div className="col-4 col-sm-3 col-md-2 bg-light d-flex align-items-center py-2">
                        <p className="fw-bold mb-0 fs-6">{myTodoValue.date}</p>
                    </div>
                    <div className="col-2 col-sm-1 col-md-1 d-flex align-items-center justify-content-center bg-danger pointer">
                    <i className="bi bi-trash3-fill text-light fs-4" style={{'cursor':'pointer'}} onClick={()=>itemDelete(myTodoValue.name)}></i>
                    </div>
                </div>   
            </div> 
        </div> 
    </>
  )
}

export default NewItems
