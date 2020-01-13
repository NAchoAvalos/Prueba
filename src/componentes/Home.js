import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import americano from '../images/americano.png';
import '../css/Home.css';

class Home extends Component {

    

    render() {
        return (<div className="carrusel">
        <Carousel interval = {10000000}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={americano}
                alt="Futbol Americano"
              />
              <Carousel.Caption>
                <h3>Futbol Americano</h3>
                <p>Lo mejor de la liga NFL</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={americano}
                alt="Third slide"
              />
          
              <Carousel.Caption>
              <h3>Futbol Americano</h3>
                <p>Lo mejor de la liga NFL</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={americano}
                alt="Third slide"
              />
          
              <Carousel.Caption>
              <h3>Futbol Americano</h3>
                <p>Lo mejor de la liga NFL</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
            </div>
        );
    }
}

export default Home;