import todo from './images/todo2.svg';
import {useState,useEffect} from 'react'
import './App.css';
import Output from './Components/Output';
import Input from './Components/Input';

function App() {

  
const [ipt, setIpt] = useState({taskId:1,task:"",assignee:"",status:"Not Started",dot:'2023-01-05'})
const [temp,setTemp]=useState(0)
const [fetchData,setFetchData]=useState(0)
const [isEdit,setIsEdit]=useState(false)
const [editId,setEditId]=useState(0)
const [browserData,setbrowserData]=useState([])
//const [maxx,setMaxx]=useState(1)
useEffect(() => {
  setbrowserData(JSON.parse(localStorage.getItem("sanket")))   
  console.log("UseEffect Run")
}, [fetchData])

let newArr=[]
let flag=browserData.length!==0 ? 1 : 0;
let maxx=1

 const handleChangeTask=(e)=>{
  if(flag===1)
  maxx=browserData[browserData.length-1].taskId+1

if(isEdit)
setIpt({...ipt,task:e.target.value,taskId:editId})
else
setIpt({...ipt,task:e.target.value,taskId:localStorage.getItem("sanket")?maxx:1})
 }

const handleChangeAssignee=(e)=>{
  if(flag===1)
  maxx=browserData[browserData.length-1].taskId+1

if(isEdit)
setIpt({...ipt,assignee:e.target.value,taskId:editId})
else
setIpt({...ipt,assignee:e.target.value,taskId:localStorage.getItem("sanket")?maxx:1})
 }

 const handleChangeStatus=(e)=>{
  if(flag===1)
  maxx=browserData[browserData.length-1].taskId+1

if(isEdit)
setIpt({...ipt,status:e.target.value,taskId:editId})
else
setIpt({...ipt,status:e.target.value,taskId:localStorage.getItem("sanket")?maxx:1})
}

const handleChangeDate=(e)=>{
  if(flag===1)
  maxx=browserData[browserData.length-1].taskId+1

if(isEdit)
setIpt({...ipt,dot:e.target.value,taskId:editId})
else
setIpt({...ipt,dot:e.target.value,taskId:localStorage.getItem("sanket")?maxx:1})
}


const updateTaskId=(maxTaskID)=>{
  setIpt({...ipt,taskId:maxTaskID})
}

  const handleSubmit=(e)=>{
  e.preventDefault()

  if(isEdit){
    setIpt({...ipt,taskId:editId})
let tempArr=browserData.map((q)=>{
  if(editId!==q.taskId){
return q
  }else{
    return ipt
  }
} )
localStorage.setItem("sanket",JSON.stringify(tempArr));
setFetchData((prev)=>prev+1)
setIsEdit(false)
setIpt({...ipt,task:"",assignee:"",status:"Not Started"})
return;
  }

  if(flag===1){
//let maxTaskID=browserData.length-1;
let maxTaskID=browserData[browserData.length-1].taskId+1

console.log("inside")
console.log("maxtaskId"+maxTaskID)
//setIpt({...ipt,taskId:maxTaskID})
 updateTaskId(maxTaskID)
console.log("after update fn state taskid"+ipt.taskId)
newArr=[...browserData,ipt]
//newArr.push(ipt)
localStorage.setItem("sanket",JSON.stringify(newArr));
setFetchData((prev)=>prev+1)
  // setArr(newArr)
   setIpt({...ipt,task:"",assignee:"",status:"Not Started"})

}else{
  alert(e.target[0].value+"-"+e.target[1].value+"-"+e.target[2].value)
  console.log(ipt.task+"--"+ipt.assignee+"--"+ipt.status)
  
  newArr=[...newArr,ipt]

  localStorage.setItem("sanket",JSON.stringify(newArr));
  setFetchData((prev)=>prev+1)
  setIpt({...ipt,status:"Not Started"})
 
}//else ends

}//fn ends

const handleDelete=(id)=>{
  let delarr=browserData.filter((t)=>{
    if(t.taskId!==id)
    return t
  })
  console.log(delarr.length)
 // alert("deleted Task id - "+id)
  localStorage.setItem("sanket",JSON.stringify(delarr));
  setFetchData((prev)=>prev+1)
  setTemp(id)
}

const handleEdit=(id)=>{
  setEditId(id)
  setIsEdit(true)
  console.log("click on edit with taskid"+id)
  let editArr=browserData.filter((t)=>{
    if(t.taskId===id)
    return t
  } )
  console.log(editArr)
  let editObj=editArr[0]
  setIpt({task:editObj.task,assignee:editObj.assignee,status:editObj.status,dot:editObj.dot})
  //setIpt({...ipt,task:editObj.task})
  // setIpt({...ipt,assignee:editObj.assignee})
  // setIpt({...ipt,dot:editObj.dot})
  // let editArr=browserData.map((t)=>{
  //   if(t.taskId!==id){
  //     return t
  //   }else{

  //   }

  // })

}



  return (
    <div className="App">
<h1 className="mainheading">TODO App</h1>
<div className="parentcontainer">
  <img className="mainlogo" src={todo} alt="" />
    <div className="maincontainer">

      <Input handleChangeTask={handleChangeTask} handleChangeAssignee={handleChangeAssignee} handleChangeStatus={handleChangeStatus} handleChangeDate={handleChangeDate} handleSubmit={handleSubmit} ipt={ipt}/>

      <Output handleDelete={handleDelete} handleEdit={handleEdit} browserData={browserData}/>
    </div>

</div>

    </div>
  );
}

export default App;
