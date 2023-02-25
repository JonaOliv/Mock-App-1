import React from "react";
import Button from 'react-bootstrap/Button';

export default function getColumnsTable3(props) {
    const columns = [
        {
            name: 'ID Record',
            selector: row => row.idRecord,
            sortable: true,
        },
        {
            name: 'Column 2',
            selector: row => row.column2,
            sortable: true,
        },
        {
            name: 'Details',
            cell: row => <Button id={row.idRecord} variant="warning" onClick={props.handleShow}>See</Button>
        }
      ];

    return columns;
}