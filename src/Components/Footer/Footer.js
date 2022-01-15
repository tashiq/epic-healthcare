import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <div className="text white d-flex justify-content-between align-items-start text-light p-4 mt-5 flex-wrap">
                <div>
                    <h4>Quick links</h4>
                    <ul style={{ listStyle: "none" }}>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Help Desk</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Email</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Facebook</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Others</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Other Services</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li>Epic Diagonistics</li>
                        <li>Epic Flywood</li>
                        <li>Epic Food</li>
                        <li>Epic Transport</li>
                    </ul>
                </div>
                <div>
                    <h4>Career</h4>
                    <ul style={{ listStyle: 'none' }}>
                        <li>Join As Doctor</li>
                        <li>Join As Lab Assistance</li>
                        <li>Join As Chef</li>
                        <li>Join As Liftman </li>
                    </ul>

                </div>
                <div>
                    <h4>Social links</h4>

                    {/* <ul  style={{ listStyle: "none" }}> */}
                    <div className="fs-3 d-flex text-white">
                        <i className="p-2 ms-2 fab fa-facebook-square"></i>
                        <i className="p-2 ms-2 fab fa-twitter-square"></i>
                        <i className="p-2 ms-2 fab fa-whatsapp"></i>
                        <i className="p-2 ms-2 fab fa-youtube"></i>
                    </div>
                    {/* </ul> */}
                </div>
            </div >
            <p className='text-center'>&copy;2022 faisal.</p>
        </div>
    );
};

export default Footer;