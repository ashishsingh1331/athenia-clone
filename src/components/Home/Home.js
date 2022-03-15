import React from 'react';
import { useEffect } from 'react';
import FullWidhtHeightImageBackground from '../FullWidhtHeightImageBackground/FullWidhtHeightImageBackground';
import VideoBgBanner from '../VideoBgBanner/VideoBgBanner';
import eyelashImg from '../../images/eyelash.jpg';
import modelImage from '../../images/model1.png';
import nailImage from '../../images/nail.jpg';
import bridalImage from '../../images/bridal.jpg';
import BookingForm from '../forms/BookingForm';
import Booking from '../Booking/Booking';
import Modal from '../../ui/Modal/Modal';
function Home(props) {
   
    return (
        <div>
            <VideoBgBanner classes={['bg-right']} bgimage={modelImage}/>
            <FullWidhtHeightImageBackground classes={['bg-center']}    id='eyelash' bgimage={eyelashImg} mainHeading='Eyelash Extenstion' subHeading='Best eyelash extension in Delhi' />
            <FullWidhtHeightImageBackground classes={['bg-center']}  id='nail' bgimage={nailImage} mainHeading='Nail Extenstion' subHeading='Best nail extension in Delhi' />
            <FullWidhtHeightImageBackground classes={['bg-center']} id='bridal' bgimage={bridalImage} mainHeading='Bridal Extenstion' subHeading='End to end Bridal services in Delhi' />
           <Booking/>
           {/* <Modal/> */}
        </div>
    );
}

export default Home;