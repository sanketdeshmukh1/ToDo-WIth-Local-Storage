import React,{useMemo} from 'react'
import {useTable,useSortBy} from 'react-table'
import { COLUMNS } from './columns'
import './table.css'
import Icon from "react-crud-icons";

export const MyTable = (props) => { 
const {browserData,handleDelete,handleEdit,showEditModal,setShowEditModal,showTaskModal,setShowTaskModal,handleTaskDesc, setShowAddNewTaskModal,showAddNewTaskModal }=props

    // const columns=useMemo(()=>COLUMNS,[])
     // const data=useMemo(()=>dummyData,[])

const tableInstance = useTable({
    columns:COLUMNS,
    data:browserData
    // [{"taskId":1,"task":"task1","assignee":"dfdf","status":"Not Started","priority":"Medium","dot":"2023-01-05"},{"taskId":2,"task":"task2","assignee":"sanket","status":"Not Started","priority":"High","dot":"2023-01-05"},{"taskId":3,"task":"task3","assignee":"sdjsfkd","status":"Not Started","priority":"High","dot":"2023-01-05"}]
},useSortBy)

const { getTableProps,getTableBodyProps,headerGroups,rows,prepareRow } = tableInstance



  return (
    <table{...getTableProps()}>
        <thead>
            {
                headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map((column)=>(
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                <span className='sortingSym'>
                                    {column.isSorted ? (column.isSortedDesc ? ' ⬇️':' ⬆️'):''}
                                    </span> </th>
                            ))
                        }

                  </tr>
                ))
            }

        </thead>
        <tbody {...getTableBodyProps()}>
            {
                rows.map((row)=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell)=>{
                                    return <td onClick={()=>{ 
                                        if(cell.column.Header==="Delete"){
                                        handleDelete(row.original.taskId)  } 
                                   else if(cell.column.Header==="Edit") 
                                   {
                                    handleEdit(row.original.taskId)
                                    setShowEditModal(true) 
                                     }
                                     else if(cell.column.Header==="Task Heading"){
                                        handleTaskDesc(row.original.taskId)
                                      setShowTaskModal(true)
                                     }

                                    }} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }

                       </tr>
                    )
                })
            }

        </tbody>

    </table>
  )
}
