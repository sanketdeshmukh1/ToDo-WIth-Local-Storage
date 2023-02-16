import React, { useState,useContext } from 'react'
import Modal from 'react-modal'
import Input from './Input'
import ModalContext from '../App'
function ModalComponent(props) {
   // const {handleChangeTask,handleChangeAssignee}=useContext(ModalContext)

    const {handleChangeTask,handleChangeTaskHeading,handleChangeAssignee,handleChangeStatus,handleChangePriority,handleChangeDate, handleSubmit ,ipt, setIpt,showEditModal,setShowEditModal,showTaskModal,setShowTaskModal}=props
  return (
<>
{/* <button onClick={()=>{setShowEditModal(true)}}>modal button</button> */}
<Modal isOpen={showEditModal}
onRequestClose={()=>{setShowEditModal(false)
  setIpt({...ipt,task:"",taskHeading:"",assignee:"",status:"Not Started"})
}} style={
{
    overlay:{
//        backgroundColor:'#818cf8',
    },
    content:{
        backgroundColor:'white',
        width:'30rem',
        height:'30rem',
        margin:"auto",
        borderRadius:"1rem",
        textAlign:"center"
    }
}

  }>
<h3 >Edit Task</h3>
  <Input handleChangeTask={handleChangeTask} handleChangeTaskHeading={handleChangeTaskHeading} handleChangeAssignee={handleChangeAssignee} handleChangeStatus={handleChangeStatus} handleChangePriority={handleChangePriority} handleChangeDate={handleChangeDate} handleSubmit={handleSubmit} ipt={ipt}/> 

<button onClick={()=>{setShowEditModal(false)   
   setIpt({...ipt,task:"",taskHeading:"",assignee:"",status:"Not Started"})}}>close</button>
</Modal>

<Modal isOpen={showTaskModal}
onRequestClose={()=>{setShowTaskModal(false)
  setIpt({...ipt,task:"",taskHeading:"",assignee:"",status:"Not Started"})}} style={
{
    overlay:{
//        backgroundColor:'#818cf8',
    },
    content:{
        backgroundColor:'white',
        width:'30rem',
        height:'30rem',
        margin:"auto",
        borderRadius:"1rem",
        textAlign:"center"
    }
}

  }>
<h3 >Task Description</h3>
{/* <h2>Hi your task description is</h2> */}
<h3>{ipt.task}</h3>
<button onClick={()=>{setShowTaskModal(false)
setIpt({...ipt,task:"",taskHeading:"",assignee:"",status:"Not Started"})
}}>close</button>
</Modal>
</>
  )
}

export default ModalComponent