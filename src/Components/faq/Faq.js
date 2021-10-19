import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    return (
        <div id='faq' className="my-3 container">
            <h2>Frequenty Asked Questions</h2>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> How To Get In Touch With The Hospital?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>Website: xyz.com</li>
                            <li>Email: response@alsd.com</li>
                            <li>24 hours online chat</li>
                            <li>Telephone: +91-22-0398457394</li>
                            <li>Coordinator details</li>
                            <li>Facebook</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Do I Need Any Agent Or Facilitator To Assist Me To Get In Touch With epic Hospital?</Accordion.Header>
                    <Accordion.Body>
                        No. You can directly get in touch with our coordinators and in case you wish to involve your family physician or well-wishers, then they are more than welcome to get connected to
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> How Can I Share My Medical Records?</Accordion.Header>
                    <Accordion.Body>
                        You may share your reports/medical records by following the steps mentioned here or by emailing the same to  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>My Reports Are In Regional Language (Swahili/Arabic/French). What Do I Do?</Accordion.Header>
                    <Accordion.Body>
                        We would recommend getting the summary of your records in the English language from your family doctor. In case that is not possible, we will try and do the needful.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Can My Attendant Get A Medical Check-Up If Required?</Accordion.Header>
                    <Accordion.Body>
                        Surely, he/she may avail health check-up packages with our wellness centre. Your case manager will assist you with the same.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;