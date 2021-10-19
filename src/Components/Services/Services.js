import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState();
    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id="services" className="mx-auto container">
            <h2>This is services</h2>
            <Row lg={3} md={2} xs={1} responsive="md" className="mx-auto">
                {
                    services?.map(service => <Service data={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;