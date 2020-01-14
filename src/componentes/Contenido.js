import React, { Component } from 'react';
import { Card, Col, Accordion, Button, Row, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Modal from './Modal'
import '../css/Contenido.css';
import itemsArray from '../datos/Ligas';


class Contenido extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false, items: itemsArray,
            tituloModal: "",
            informacionModal: "",
            classContent: "col-md-12",
            classModal: "col-md-4 panel",
            buttonName: "Expandir",
            estadoButton: "oculto"
        }
    }

    render() {
        /*const { nombre } = this.props.location.aboutProps*/
        if (this.props.location.aboutProps !== undefined) {

            const { ligas } = this.props.location.aboutProps


            const renderAuthButton = (titulo) => {
                if (this.state.showModal) {
                    return <Modal title={titulo} />
                }
            }

            return (<div className="contenedor">
                <Col className={this.state.classContent}>
                    {ligas && ligas.map((item, key) => {
                        if (key >= 0)

                            return <div className="content-card">
                                <Col className="col-md-10">
                                    <Accordion defaultActiveKey="0" className="class-accordion">
                                        <Card>
                                            <Card.Header className="class-card-header">
                                                
                                                <Accordion.Toggle as={Button}  eventKey="0" >
                                                {item.title}
      </Accordion.Toggle>
                                            </Card.Header>
                                            <Card.Header>
                                                <Row>
                                                    <Col className="col-md-4">25' 1st Half </Col>
                                                    <Col className="col-lg-2">S</Col>
                                                    <Col className="col-lg-2">M</Col>
                                                    <Col className="col-lg-2">T</Col>
                                                    <Col className="col-lg-2">
                                                        <Button variant="info" onClick={() => this.setState({ showModal: true, tituloModal: item.title, informacionModal: item.informacion, classContent: "col-md-10", estadoButton: "visible" })}>+</Button>
                                                    </Col>

                                                </Row>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="col-md-4">30 - Equipo Visita</Col>
                                                        <Col className="col-lg-2"><Form.Control size="sm" type="text" placeholder="Small text" /></Col>
                                                        <Col className="col-lg-2"><Form.Control size="sm" type="text" placeholder="Small text" /></Col>
                                                        <Col className="col-lg-2"><Form.Control size="sm" type="text" placeholder="Small text" /></Col>
                                                        <Col className="col-lg-2"> </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="col-md-4">22 - Equipo Local</Col>
                                                        <Col className="col-lg-2"><Form.Control size="sm" type="text" placeholder="Small text" /></Col>
                                                        <Col className="col-lg-2"><Form.Control size="sm" type="text" placeholder="Small text" /></Col>
                                                        <Col className="col-lg-2"><Form.Control size="sm" type="text" placeholder="Small text" /></Col>
                                                        <Col className="col-lg-2"> </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="col-md-4">    </Col>
                                                        <Col className="col-lg-2">    </Col>
                                                        <Col className="col-lg-2"><Form.Control size="sm" type="text" placeholder="Small text" /></Col>
                                                        <Col className="col-lg-2">    </Col>
                                                        <Col className="col-lg-2"> </Col>
                                                    </Row>

                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>
                                <Col className="col-md-2">

                                </Col>
                            </div>

                        return <Card body>No hay ligas asociadas.</Card>
                    }
                    )}


                </Col>
                <Col className={this.state.classModal} >
                    <Button className={this.state.estadoButton} variant="info" onClick={() => this.setState({ classContent: "expandir", classModal: "col-md-12 ", buttonName: "Reducir", estadoButton: "oculto" })}>{this.state.buttonName}</Button>
                    {renderAuthButton(this.state.tituloModal, this.state.informacionModal)}</Col>
            </div>);
        }
        else {
            return <Redirect from="/" to="/" />
        }
    }
}

export default Contenido;