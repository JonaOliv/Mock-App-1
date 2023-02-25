import React, { useState } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import DataTable from 'react-data-table-component';

import getColumnsTable1 from "../hooks/getColumnsTable1";

import getRecords from "../../../api/axios/records";

import '../styles/sidebar.css';

function showModal(event){
    
}

function Quarter1() {
  const [key, setKey] = useState('case1');

    
    
  const columns = getColumnsTable1(showModal);
  const data = getRecords(0);
  const ExpandedComponent = ({ data }) => <p>{data.description}</p>;

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
        <Tab eventKey="case1" title="Case 1">
        <Container fluid>
            <Row className="jb-quarter-1">
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
        </Tab>
        <Tab eventKey="case2" title="Case 2">
        <Container fluid>
            <Row className="jb-quarter-1">
                <h1>Lorem Ipsum </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante quis lacus volutpat aliquet. Aliquam consequat odio non enim tincidunt, vitae eleifend sapien tempus. Duis vehicula eros felis, non rutrum risus scelerisque vel. Curabitur eget risus est. Cras sed ex ut libero tristique pharetra vel ac justo. Nunc vestibulum diam nec urna fringilla imperdiet. Sed sit amet odio egestas ipsum maximus hendrerit ut sit amet nibh. Nunc at egestas risus, in euismod elit. Duis imperdiet ultricies ante. Vivamus non sapien odio. Suspendisse tincidunt ipsum metus, ut pellentesque lacus hendrerit sit amet. Phasellus nec felis vehicula dolor bibendum cursus. Ut congue mi bibendum ornare mattis.
                </p>
                <p>
                    Nulla congue mattis turpis non egestas. Nullam auctor ac lorem in ultrices. Phasellus hendrerit lacus sem. Vivamus sed viverra sapien, ut pharetra lacus. Phasellus leo justo, porta at velit nec, vulputate rutrum turpis. Duis non nulla vel diam mollis fermentum quis quis sapien. Mauris aliquet dolor libero, nec consectetur massa lobortis a. Phasellus eu lorem urna.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget ante quis lacus volutpat aliquet. Aliquam consequat odio non enim tincidunt, vitae eleifend sapien tempus. Duis vehicula eros felis, non rutrum risus scelerisque vel. Curabitur eget risus est. Cras sed ex ut libero tristique pharetra vel ac justo. Nunc vestibulum diam nec urna fringilla imperdiet. Sed sit amet odio egestas ipsum maximus hendrerit ut sit amet nibh. Nunc at egestas risus, in euismod elit. Duis imperdiet ultricies ante. Vivamus non sapien odio. Suspendisse tincidunt ipsum metus, ut pellentesque lacus hendrerit sit amet. Phasellus nec felis vehicula dolor bibendum cursus. Ut congue mi bibendum ornare mattis.
                </p>
                <p>
                    Nulla congue mattis turpis non egestas. Nullam auctor ac lorem in ultrices. Phasellus hendrerit lacus sem. Vivamus sed viverra sapien, ut pharetra lacus. Phasellus leo justo, porta at velit nec, vulputate rutrum turpis. Duis non nulla vel diam mollis fermentum quis quis sapien. Mauris aliquet dolor libero, nec consectetur massa lobortis a. Phasellus eu lorem urna.
                </p>
            </Row>
        </Container>
        </Tab>
        <Tab eventKey="case3" title="Case 3">
        <Container fluid>
            <Row className="jb-quarter-1">
                <Form>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="controlName1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="name" />
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="controlEmail1">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="controlColumn1">
                            <Form.Label>Column 1</Form.Label>
                            <Form.Control type="text" placeholder="Column 1" />
                        </Form.Group>
                        </Col>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="controlColumn2">
                            <Form.Label>Column 2</Form.Label>
                            <Form.Control type="text" placeholder="Column 2" />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <Form.Group className="mb-3" controlId="controlFIles" >
                            <Form.Label>Multiple files input</Form.Label>
                            <Form.Control type="file" multiple />
                        </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3" controlId="controlTextarea">
                            <Form.Label>Some Text</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} >
                        <Button variant="primary" >Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
        </Tab>
    </Tabs>
  );
}

export default Quarter1;