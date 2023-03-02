import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./datatable.scss"
import { userColumns,userRows } from '../datatablesource';


export const Datatable = () => {

  const actionColumn =[
    {
      field:"action",
      headerName:"Action",
      width:200,
      renderCell:()=>{
        return(
          <div className="cellaction">
            <div className="viewbutton">View</div>
            <div className="deletebutton">Delete</div>
          </div>
         );
      },
    },
  ];

  return (
     <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  )
}

