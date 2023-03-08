import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./datatable.scss"
import { userColumns,userRows } from '../datatablesource';
import {Link} from "react-router-dom";


export const Datatable = () => {

  const actionColumn =[
    {
      field:"action",
      headerName:"Action",
      width:200,
      renderCell:()=>{
        return(
          <div className="cellaction">
            <Link to="/users/test" style={{textDecoration:"none"}}>
            <div className="viewbutton">View</div>
            </Link>
            <div className="deletebutton">Delete</div>
          </div>
         );
      },
    },
  ];

  return (
     <div className="datatable">
       <div className="datatableTitle">
         Add New User
         <Link to="/users/new" className='link'>
           Add New
         </Link>
       </div>
      <DataGrid className='datagrid'
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

