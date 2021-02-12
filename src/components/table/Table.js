import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import cregital2 from "../../asset/cregital2.PNG"
import cregital from '../../asset/cregital.PNG'
import imperialsoft from '../../asset/imperialsoft.PNG'
import intelia from '../../asset/intelia.PNG'
import talosmat from '../../asset/talosmat.PNG'
import {FormControl, Select,  InputLabel} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const columns = [
  { field: 'id', headerName: null, width: 70 },
  { field: 'companyname', headerName: 'Company name', width: 130 },
  { field: 'companysize', headerName: 'Company size', width: 130 },
  {
    field: 'yrs',
    headerName: 'Yrs of inc.',
    type: 'number',
    width: 90,
  },
  {
    field: 'revenue',
    headerName: 'Revenue',
    type: 'number',
    width: 150,
  },
  {
    field: 'icon',
    headerName: 'Yrs of inc.',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, companyname: {cregital2}, companysize: 102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 2, companyname: 'Intelia', companysize: 120, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 3, companyname: 'Optisoft', companysize: 102,yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 4, companyname: 'Imperialsoft', companysize: 102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 5, companyname: 'Altechma', companysize: 102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 6, companyname: 'Talosmart', companysize:102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 7, companyname: 'Atlassian', companysize: 102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 8, companyname: 'Weevil Company', companysize: 102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 9, companyname: 'CloudNetIQ', companysize: 102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
  { id: 10, companyname: 'Enyata', companysize: 102, yrs: 3, revenue: "NGN 1,000,000", icon: null},
//   { field: 'button',
//     headerName: null,
//     width: 150,
//     renderCell: (params) => (
//         <strong>
//         {params.value.getFullYear()}
//         <Button
//             variant="contained"
//             color="primary"
//             size="small"
//             style={{ marginLeft: 16 }}
//         >
//             Open
//         </Button>
//         </strong>
//     ),
//   },
];

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function DataTable() {
      const classes = useStyles();
  return (
    <div>
        <div>
            <button>All</button> 
            <button><i className="fa fa-cirle"> </i>Approved</button> 
            <button><i className="fa fa-cirle"> </i>Pending</button>
            <button><i className="fa fa-cirle"> </i>Declined</button>
            <FormControl variant="filled" className={classes.formControl}>
                <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
                <Select
                    native
                    // value={state.age}
                    // onChange={handleChange}
                    inputProps={{
                        name: 'age',
                        id: 'filled-age-native-simple',
                    }}
                    >
                    <option aria-label="None" value="" />
                    <option value={10}>Companyname</option>
                    <option value={20}>Companysize</option>
                   </Select>
            </FormControl>
        </div>
        
    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}