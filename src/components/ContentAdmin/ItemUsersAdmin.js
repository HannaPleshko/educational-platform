import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useGetAllUsersQuery } from '../../redux';
import { AgGridReact } from 'ag-grid-react';
import style from './ContentAdmin.module.css'

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const ItemUsersAdmin = () => {
    
    const { data, isLoading } = useGetAllUsersQuery(`/user`)

    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

    const [columnDefs, setColumnDefs] = useState([
        { field: 'id', filter: true },
        { field: 'name', filter: true },
        { field: 'email', filter: true },
        { field: 'role' },
        { field: 'status' }
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => ({
        sortable: true
    }));

    // Example of consuming Grid Event
    const cellClickedListener = useCallback(event => {
        console.log('cellClicked', event);
    }, []);

    useEffect(() => {

        setRowData(data)
    }, [data]);


    return (
        <div className='ag-theme-alpine' style={{ width: '73.7%', height: 400 }}>
            <AgGridReact
                ref={gridRef} // Ref for accessing Grid's API

                rowData={rowData} // Row Data for Rows

                columnDefs={columnDefs} // Column Defs for Columns
                defaultColDef={defaultColDef} // Default Column Properties

                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                rowSelection='multiple' // Options - allows click selection of rows

                onCellClicked={cellClickedListener} // Optional - registering for Grid Event

            />
        </div>
    );
};

export default ItemUsersAdmin;
