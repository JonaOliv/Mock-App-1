import '../styles/sidebar.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import getColumnsTable2 from "../hooks/getColumnsTable2";
import getRecords from "../../../api/axios/records";

function showModal(event){
    
}

function Sidebar(props){

    const columns = getColumnsTable2(showModal);
    const ExpandedComponent = ({ data }) => <p>{data.description}</p>;
    const data = getRecords(0);


    return (
        <div id={props.idSidebar}>
            <div className="jb-sidebar-wrapper">
                <Container fluid>
                    <Row className="jb-searchbox-sidebar">
                        <Form>
                            <Row>
                            <Form.Control className="jb-searchbox-search" type="text" placeholder="Searching something" />
                            <Button className="jb-searchbox-button"  variant="primary" >Search</Button>
                            </Row>
                        </Form>
                    </Row>
                    <Row>
                        <DataTable 
                            columns={columns}
                            data={data}
                            expandableRows
                            expandableRowExpanded={row => row.description}
                            expandableRowsComponent={ExpandedComponent}
                            expandOnRowClicked
                            expandOnRowDoubleClicked
                            expandableRowsHideExpander
                            pagination
                        />
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Sidebar;