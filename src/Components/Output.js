import {useState} from 'react'
import deleteIcon from '../images/delete_icon.svg'
import editIcon from '../images/edit_icon.svg'
import '../App.css';
import React from 'react'
import Icon from "react-crud-icons";
import "../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";

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
  <h3 >Priority</h3>
  {browserData.map((q)=>{return <h4 key={q.taskId} className='showtask'>{ q.priority} </h4>})}
</div>


<div className='statuscontent'>
  <h3 >Date</h3>
  {browserData.map((q)=>{return <h4 key={q.taskId} className='showtask'>{ q.dot} </h4>})}
</div>

<div className='statuscontent'>
  <h3 className='hide'>Button</h3>
  {browserData.map((q)=>{return <Icon name="delete" size="tiny" onClick={()=>{handleDelete(q.taskId)}} key={q.taskId} className='showButton'/>})}
</div>
<div className='statuscontent'>
  <h3 className='hide'>Button</h3>
  
  {browserData.map((q)=>{return <Icon name="edit" size="tiny" onClick={()=>{handleEdit(q.taskId)}} key={q.taskId} className='showButton'/>})}
</div>
</div>
 

</div>


  )
}

export default Output
