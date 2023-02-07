import React, { useState,useContext } from 'react'
import Modal from 'react-modal'
import Input from './Input'
import ModalContext from '../App'
function ModalComponent(props) {
   // const {handleChangeTask,handleChangeAssignee}=useContext(ModalContext)

    const {handleChangeTask,handleChangeAssignee,handleChangeStatus,handleChangePriority,handleChangeDate, handleSubmit ,ipt,showModal,setShowModal}=props
  return (
<>
{/* <button onClick={()=>{setShowModal(true)}}>modal button</button> */}
<Modal isOpen={showModal}
onRequestClose={()=>setShowModal(false)} style={
{
    overlay:{
        backgroundColor:'#818cf8',
    },
    content:{
        backgroundColor:'white',
        width:'30rem',
        height:'30rem',
        margin:"auto",
        borderRadius:"1rem"
    }
}

  }>

  <Input handleChangeTask={handleChangeTask} handleChangeAssignee={handleChangeAssignee} handleChangeStatus={handleChangeStatus} handleChangePriority={handleChangePriority} handleChangeDate={handleChangeDate} handleSubmit={handleSubmit} ipt={ipt}/> 

<button onClick={()=>{setShowModal(false)}}>close</button>
</Modal>
</>
  )
}

export default ModalComponent