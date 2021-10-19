import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from './..//Doctor/Doctor';
const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div id="doctors" className="container">
            <h3 className="text-warning">Our Specialist</h3>
            <Row lg={3} xs={1} md={2}>
                {
                    doctors?.map(doctor => <Doctor data={doctor}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;