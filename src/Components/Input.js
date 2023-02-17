import React from 'react'
//import '../App.css';

function Input(props) {
    const {handleChangeTask, handleChangeTaskHeading, handleChangeAssignee, handleChangeStatus,handleChangePriority, handleChangeDate ,handleSubmit,setShowEditModal ,ipt}=props
  return (
<>
   
<form className="form" onSubmit={handleSubmit}>

<div className="forminp">
<input className="iptfieldtaskheading" type="text" placeholder="Enter the Task Heading" required onChange={handleChangeTaskHeading} value={ipt.taskHeading} />

<input className="iptfieldtask" type="text" placeholder="Enter the task details" required onChange={handleChangeTask} value={ipt.task} />

<input className="iptfieldasignee" type="text" placeholder="Enter the asignee" required onChange={handleChangeAssignee} value={ipt.assignee}/>

<select className="iptfielddropdownstatus" onChange={handleChangeStatus} required value={ipt.status} >
<option value="Not Started">Not Started</option>
<option value="In Progress">In Progress</option>
<option value="Done">Done</option>
<option value="MRStage">MRStage</option>
<option value="Blocked">Blocked</option>
</select>

<select className="iptfielddropdownpriority" onChange={handleChangePriority} required value={ipt.priority} >
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="Low">Low</option>
</select>

<input className="iptfielddate" type="date" onChange={handleChangeDate} required value={ipt.dot}/>
</div>
<button className="submitbtn"  type="submit" >Add Task</button>
</form>

</>
  )
}

export default Input