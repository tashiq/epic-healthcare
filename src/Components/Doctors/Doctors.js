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
        <div id="doctors" className="container p-5 m-3">
            <h3 className="text-warning">Our Specialist</h3>
            <Row lg={3} xs={1} md={2}>
                {
                    doctors?.map(doctor => <Doctor data={doctor} key={doctor.id}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;