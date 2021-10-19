import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Service from "../Service/Service";

const Details = () => {
    // const params = useParams()
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {

        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const service = services?.find(item => item.id === serviceId);
    return (
        <div>
            {
                service?.id && <Service data={service} key={serviceId}></Service>
            }
        </div>
    );
};

export default Details;