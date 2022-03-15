import React from 'react';
import FullWidhtHeightImageBackground from '../components/FullWidhtHeightImageBackground/FullWidhtHeightImageBackground';
import {useParams} from 'react-router-dom';
function Services(props) {
    let service = useParams();
    console.log(service.servicename);
    return (
        <div>
            <FullWidhtHeightImageBackground/>
        </div>
    );
}

export default Services;