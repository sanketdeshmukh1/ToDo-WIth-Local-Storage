import {useState} from 'react'
import '../App.css';
import React from 'react'

function Output(props) {
    const {handleDelete,handleEdit,browserData}=props
  return (
<div className='opcontainer'>
  <h2 className='optitle'>My Notes</h2>
  
<div className="opheader">
<div className='taskcontent'>
  <h3 >Task</h3>
  {browserData.map((q)=>{return <h4  key={q.taskId}  className='showtask'>{ q.task} </h4>})}
</div>
<div className='asigneecontent'>
  <h3 >Asignee</h3>
  {browserData.map((q)=>{return <h4 key={q.taskId} className='showtask'>{ q.assignee} </h4>})}
</div>

<div className='statuscontent'>
  <h3 >Status</h3>
  {browserData.map((q)=>{return <h4 key={q.taskId} className='showtask'>{ q.status} </h4>})}
</div>
<div className='statuscontent'>
  <h3 >Date</h3>
  {browserData.map((q)=>{return <h4 key={q.taskId} className='showtask'>{ q.dot} </h4>})}
</div>
<div className='statuscontent'>
  <h3 >Button</h3>
  {browserData.map((q)=>{return <button onClick={()=>{handleDelete(q.taskId)}} key={q.taskId} className='showButton'>Delete </button>})}
</div>
<div className='statuscontent'>
  <h3 >Button</h3>
  {browserData.map((q)=>{return <button onClick={()=>{handleEdit(q.taskId)}} key={q.taskId} className='showButton'>Edit </button>})}
</div>

</div>
 

</div>


  )
}

export default Output
