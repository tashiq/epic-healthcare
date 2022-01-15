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
    document.title = 'Epic Health Care| Doctors';
    return (
        <div id="doctors" style={{ margin: '90px 14px 14px 0', }}>
            <h3 className="text-info text-center">Our Specialist</h3>
            <Row lg={3} xs={1} md={2}>
                {
                    doctors?.map(doctor => <Doctor data={doctor} key={doctor.id}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;