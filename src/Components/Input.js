import React from 'react'
import '../App.css';

function Input(props) {
    const {handleChangeTask, handleChangeAssignee, handleChangeStatus, handleChangeDate ,handleSubmit ,ipt}=props
  return (
<>
   
<form className="form" onSubmit={handleSubmit}>

<div className="forminp">
<input className="iptfieldtask" type="text" placeholder="Enter the task details" required onChange={handleChangeTask} value={ipt.task} />

<input className="iptfieldasignee" type="text" placeholder="Enter the asignee" required onChange={handleChangeAssignee} value={ipt.assignee}/>

<select className="iptfielddropdown" onChange={handleChangeStatus} required value={ipt.status} >
<option value="Not Started">Not Started</option>
<option value="In Progress">In Progress</option>
<option value="Done">Done</option>
<option value="MRStage">MRStage</option>
<option value="Blocked">Blocked</option>
</select>
<input className="iptfielddate" type="date" onChange={handleChangeDate} required value={ipt.dot}/>
</div>
<button className="submitbtn" type="submit" >Add Task</button>
</form>

</>
  )
}

export default Input