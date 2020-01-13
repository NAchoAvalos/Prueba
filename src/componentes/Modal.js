import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        informacion: PropTypes.string.isRequired
    };

    render() {
        const { title } = this.props;
        const { informacion } = this.props;
        return (
            <div>
                <h3> {title}</h3>
                <article>{informacion}</article>
            </div>
        );
    }
}

export default Modal;