import React from 'react';
import { Accordion } from 'react-bootstrap';

const Faq = () => {
    document.title = 'Epic Health Care| FAQ';
    return (
        <div className="container" id="faq" style={{ marginTop: '80px' }}>
            <h3 className="text-info py-3 text-center">Frequently Asked Question</h3>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How To Get In Touch With The Hospital?</Accordion.Header>
                    <Accordion.Body>
                        Website: www.sevenhillshospital.com <br />
                        Email: response@sevenhillshospital.com <br />
                        24 hours online chat
                        Telephone: <br />
                        Direct walk-in <br />
                        Coordinator details <br />
                        Facebook
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header> Do I Need Any Agent Or Facilitator To Assist Me To Get In Touch With Sevenhills Hospital?</Accordion.Header>
                    <Accordion.Body>
                        No. You can directly get in touch with our coordinators and in case you wish to involve your family physician or well-wishers, then they are more than welcome to get connected to SevenHills Hospital.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header> With Whom Can I Get In Touch With To Avail Cashless Benefit?</Accordion.Header>
                    <Accordion.Body>
                        You may get in touch with Ms. Archana Dubey , our International Patient Coordinator, on archanadubey@sevenhillshosital.com or on +919821433709.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Is There Any Vaccine Which I Need To Take Prior To Coming To Bangladesh?</Accordion.Header>
                    <Accordion.Body>
                        All foreigners must get inoculated against Yellow Fever at least 10 (ten) days prior to applying for the Visa and must produce genuine  valid Yellow Fever Vaccination Card both at the Visa Counter of the Embassy and at the Indian airport or check-post of entry.
                        Apart from Yellow Fever vaccination certificate as per Govt. of India mandate, all passengers arriving in India effective 14th February, 2014, from Kenya, Ethiopia, Afghanistan, Israel, Pakistan, Nigeria and Somalia, will have to carry Oral Polio Vaccination (OPV) Certificate taken six weeks prior to entry. This certificate is mandatory for both Adults and Children. All travelers from the above seven countries will be required to have a written record of vaccination (patient-retained record) for polio in their possession, preferably using IHR 2005 International Certificate of Vaccination or Prophylaxis from a hospital or centre administering OPV.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;