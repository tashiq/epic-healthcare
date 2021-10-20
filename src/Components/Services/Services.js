import React, { useEffect, useState } from 'react';
import { Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div id="services" className="mx-auto container p-2 my-4">
            <h3 className="text-info">Our speciality</h3>
            <Row lg={3} md={2} xs={1} className="mx-auto">
                {
                    services?.map(service => <Service data={service} key={service.id}>
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