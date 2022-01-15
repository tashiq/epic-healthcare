import React from 'react';
// import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, picture, about } = props.data
    return (
        <div className='col mt-3' data-aos="fade-up" data-aos-duration="1000">
            <div className="card" style={{ minWidth: '18rem' }}>
                <img src={picture} className="card-img-top card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{about}</p>
                    <div className="card-bottom">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;