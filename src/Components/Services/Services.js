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
    document.title = 'Epic Health Care| Home'
    return (
        <div id="services" className="px-4 pt-5">
            <h3 className="text-center py-2">Our speciality</h3>
            <Row lg={3} md={2} xs={1} className="mx-auto">
                {
                    services?.map(service => <Service data={service} key={service.id}>
                        <Button variant="primary">
                            <Link to={`/services/` + service.id} className="text-decoration-none text-white">Details</Link>
                        </Button>
                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;