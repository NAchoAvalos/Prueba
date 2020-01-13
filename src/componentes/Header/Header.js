import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Header extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    render() {
        const { title, items } = this.props;
        return (
            <div>
                <div className="row mt-0">
                   

                </div>
                <div className="navbar-fixed-top " >
                    <nav className="navbar navbar-expand-lg navbar-dark color_header  font-weight-bold margenes-header">
                        <a className="navbar-brand" href={items[0].url}>
                            {/*<img src={logo} width="40" height="40" alt="Logo" />*/}
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto negro">
                                {items && items.map((item, key) => {
                                    if (key === 0)
                                        return <li className='nav-item' key={key}><Link className='btn active' to={item.url}>{item.title}</Link></li>

                                    return <li className='nav-item' key={key}><Link className='btn' to={item.url}>{item.title}</Link></li>
                                }
                                )}
                            </ul>

                        </div>

                    </nav>
                </div>


            </div>

        );
    }
}

export default Header;