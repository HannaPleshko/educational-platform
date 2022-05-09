import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { useAllUsersQuery } from '../../redux';
import { AgGridReact } from 'ag-grid-react';
import style from './ContentAdmin.module.css';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const ItemUsersAdmin = () => {
  const { data } = useAllUsersQuery();

  const gridRef = useRef();
  const [rowData, setRowData] = useState();

  const columnDefs = [
    { field: 'id', filter: true },
    { field: 'name', filter: true },
    { field: 'email', filter: true },
    { field: 'role' },
    { field: 'status' },
  ];

  const defaultColDef = useMemo(() => ({
    sortable: true,
  }));

  const cellClickedListener = useCallback((event) => {
    console.log('cellClicked', event);
  }, []);

  useEffect(() => {
    setRowData(data);
  }, [data]);

  return (
    <div className="ag-theme-alpine" style={{ width: '73%', height: 300 }}>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        rowSelection="multiple"
        onCellClicked={cellClickedListener}
      />
    </div>
  );
};

export default ItemUsersAdmin;
