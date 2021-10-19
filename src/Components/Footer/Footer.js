import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark text white d-flex justify-content-between align-items-center">
            <div>
                <h4>Quick links</h4>
                <ul>
                    <li><a href="#">Help Desk</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Others</a></li>
                </ul>
            </div>
            <div>
                <ul className="fs-3 d-flex text-white" style={{ listStyle: "none" }}>
                    <li><i className="p-2 ms-2 fab fa-facebook-square"></i></li>
                    <li><i className="p-2 ms-2 fab fa-twitter-square"></i></li>
                    <li><i className="p-2 ms-2 fab fa-whatsapp"></i></li>
                    <li><i className="p-2 ms-2 fab fa-youtube"></i></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;