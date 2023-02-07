import Icon from "react-crud-icons";
export const COLUMNS=[
    {
        Header:'Task',
        accessor:'task'
    },
    {
        Header:'Assignee',
        accessor:'assignee'
    },
    {
        Header:'Status',
        accessor:'status'
    },
    {
        Header:'Priority',
        accessor:'priority'
    },
    {
        Header:'Dot',
        accessor:'dot'
    } ,
    {
        Header: "Delete",
        Cell: () => (
        <Icon name="delete" size="tiny" />
        )
    } ,
    {
        Header: "Edit",
        Cell: () => (
        <Icon name="edit" size="tiny" />
        )
    }
]