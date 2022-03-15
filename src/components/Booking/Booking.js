import React from 'react';
import BookingForm from '../forms/BookingForm';

function Booking(props) {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-8  pt-8 pb-8 pl-4 pr-4 bg-light-orange'>
            <div className='form-container'>
            <h1 className='text-4xl mb-5 text-center md:text-6xl lg:text-6xl font-Baby text-dark-gray'>Book Appointment</h1>
            <BookingForm/>
            </div>
            <div className="contact-container">
                contact
            </div>
           
        </div>
    );
}

export default Booking;