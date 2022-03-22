import React from 'react';
import FullWidhtHeightImageBackground from '../components/FullWidhtHeightImageBackground/FullWidhtHeightImageBackground';
import {useParams} from 'react-router-dom';
import bridalImage from '../images/bridal.jpg';
import ServiceDescription from '../components/ServiceDescription/ServiceDescription';
function Services(props) {
    let service = useParams();
    

    return (
        <div>
            <FullWidhtHeightImageBackground classes={['bg-75']} id='bridal' bgimage={bridalImage} mainHeading='Bridal Extenstion' subHeading='End to end Bridal services in Delhi' />
            <ServiceDescription/>
        </div>
    );
}

export default Services;