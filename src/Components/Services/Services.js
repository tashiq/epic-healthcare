import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
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
                    services?.map(service => <Service data={service}>
                        <Button variant="primary">
                            <Link to={`/services/` + service.id} className="text-decoration-none text-white">View</Link>
                        </Button>
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;