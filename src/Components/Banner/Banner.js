import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div id="banner">
            <Carousel variant="dark" className="container mx-auto w-75">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://peoplehomecare.com.bd/wp-content/uploads/2021/06/patient-care-home-service-peoplehomecare-1024x576.png"
                        alt="First slide"
                    />
                    <Carousel.Caption className="bg-dark text-white">
                        <h5>Patient Care</h5>
                        <p>We are special at the care of Patient</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://eye.keckmedicine.org/wp-content/uploads/2020/09/CXL_photo_crop-1024x576.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="bg-dark text-white">
                        <h5>Best Doctors</h5>
                        <p>Our doctors are certified and award winners.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sternmed.de/wp-content/uploads/2020/10/mrt-scanner_marcom-0.5t-left-shadow-1024x683.png"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="bg-dark text-white">
                        <h5>Best Instruments</h5>
                        <p>We have the best and updated instruments in Bangladesh.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;