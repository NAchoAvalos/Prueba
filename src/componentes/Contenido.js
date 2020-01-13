import React, { Component } from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import Modal from './Modal'
import '../css/Contenido.css';
import itemsArray from '../datos/Ligas';


class Contenido extends Component {

    constructor(props) {
        super(props)
        this.state = { showModal: false, items: itemsArray, tituloModal: "", informacionModal: "", classContent: "col-md-12" }
    }

    render() {
        const renderAuthButton = (titulo, informacion) => {
            if (this.state.showModal) {
                return <Modal title={titulo} informacion={informacion} />
            }
        }

        return (<div className="contenedor">
            <Col className={this.state.classContent}>
                {this.state.items && this.state.items.map((item, key) => {
                    if (key >= 0)

                        return <div className="content-card"> <Card body key={key}>{item.title}</Card>
                            <Button variant="info" onClick={() => this.setState({ showModal: true, tituloModal: item.title, informacionModal: item.informacion, classContent: "col-md-6" })}>+</Button>
                            <Button variant="info" onClick={() => this.setState({ showModal: false, tituloModal: item.title, informacionModal: item.informacion, classContent: "col-md-12" })}>-</Button></div>

                    return <Card body>No hay ligas asociadas.</Card>
                }
                )}

            </Col>
            <Col className="col-md-6" >{renderAuthButton(this.state.tituloModal, this.state.informacionModal)}</Col>
        </div>);
    }
}

export default Contenido;