import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Quarter2() {
    return (
        <Container fluid>
            <Row className="jb-quarter-2">
                <Form>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="controlTextarea2">
                                <Form.Label>Some Label Describing Data</Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Col>
                    </Row>    
                    <Row className="justify-content-end">
                        <Col md={4} >
                        <Button variant="primary" >Submit</Button>
                        <Button variant="light" >Cancel</Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>

    );
}

export default Quarter2;