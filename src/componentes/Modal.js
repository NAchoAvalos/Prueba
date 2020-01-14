import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Accordion, Button, Row, Form } from 'react-bootstrap';
import '../css/Contenido.css';

class Modal extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        const { title } = this.props;
        return (
            <div>
                <div className="content-card">
                    <Col className="col-md-10">
                        <Accordion defaultActiveKey="0" className="class-accordion">
                            <Card>
                                <Card.Header className="class-card-header">
                                    {title}
                                </Card.Header>
                                <Card.Header className="class-card-header">
                                    Estadisticas del juego
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        +
      </Accordion.Toggle>
                                </Card.Header>

                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 1  </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 2 </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 3  </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 4 </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 5  </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 6 </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 7 </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 8 </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>
                                        <Row>
                                            <Col className="col-md-8">  Aspecto 9 </Col>
                                            <Col className="col-md-4">  <Form.Control size="sm" type="text" placeholder="Small text" />  </Col>
                                        </Row>

                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                    <Col className="col-md-2">
                    </Col>
                </div>
            </div>
        );
    }
}

export default Modal;