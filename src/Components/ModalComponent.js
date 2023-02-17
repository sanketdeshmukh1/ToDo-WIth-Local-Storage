import React, { useState,useContext } from 'react'
import Modal from 'react-modal'
import Input from './Input'
import ModalContext from '../App'
function ModalComponent(props) {
   // const {handleChangeTask,handleChangeAssignee}=useContext(ModalContext)

    const {handleChangeTask,handleChangeTaskHeading,handleChangeAssignee,handleChangeStatus,handleChangePriority,handleChangeDate, handleSubmit ,ipt, setIpt,showEditModal,setShowEditModal,showTaskModal,setShowTaskModal, setShowAddNewTaskModal,showAddNewTaskModal}=props
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
<h3 className='addnewtaskHeading'>Edit Task</h3>
  <Input handleChangeTask={handleChangeTask} handleChangeTaskHeading={handleChangeTaskHeading} handleChangeAssignee={handleChangeAssignee} handleChangeStatus={handleChangeStatus} handleChangePriority={handleChangePriority} handleChangeDate={handleChangeDate} handleSubmit={handleSubmit} ipt={ipt}/> 

<button className='modalclosebtn' onClick={()=>{setShowEditModal(false)   
   setIpt({...ipt,task:"",taskHeading:"",assignee:"",status:"Not Started"})
  }
   
   }>close</button>
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
<h3 className='addnewtaskHeading'>Task Description</h3>
{/* <h2>Hi your task description is</h2>*/} 

<div className="descContainer">
<div className='taskdesc'>{ipt.task}</div>
</div>

<button className='modalclosebtn' onClick={()=>{setShowTaskModal(false)
setIpt({...ipt,task:"",taskHeading:"",assignee:"",status:"Not Started"})
}}>close</button>
</Modal>


<Modal isOpen={showAddNewTaskModal}
onRequestClose={()=>{setShowAddNewTaskModal(false)
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
<h3 className='addnewtaskHeading'>Add New Task</h3>
  <Input handleChangeTask={handleChangeTask} handleChangeTaskHeading={handleChangeTaskHeading} handleChangeAssignee={handleChangeAssignee} handleChangeStatus={handleChangeStatus} handleChangePriority={handleChangePriority} handleChangeDate={handleChangeDate} handleSubmit={handleSubmit} ipt={ipt}/> 

<button className='modalclosebtn' onClick={()=>{setShowAddNewTaskModal(false)   
   setIpt({...ipt,task:"",taskHeading:"",assignee:"",status:"Not Started"})
  }
   
   }>close</button>
</Modal>
</>
  )
}

export default ModalComponent