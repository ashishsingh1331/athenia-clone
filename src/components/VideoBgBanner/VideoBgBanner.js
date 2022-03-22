import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';
import Button from '../../ui/Button/Button';


function VideoBgBanner(props) {
    const {isOpen:isModalOpen} = useSelector(state => state.ui.modal);
    const dispatch = useDispatch();
    

    const bookAppointmentClickHandler = (e) => {
        e.preventDefault();
        dispatch(uiSliceActions.toggleModal());
    }
    return (
        <div style={{
            backgroundImage: `url(${props.bgimage})`,
            backgroundSize:'cover',
        }} className={` relative w-full flex flex-col items-center justify-end h-screen ${props.classes ? props.classes.join(' ') : ''}`}>
            <div className=' absolute top-[50%] flex flex-col items-center w-full'>
                <h1 className='text-4xl md:text-6xl lg:text-9xl font-Baby text-white'>Bridals</h1>
                <h1 className='text-4xl md:text-6xl lg:text-5xl font-Baby text-white'>Best Bridals in Delhi</h1>
                <div className='flex flex-wrap justify-center mt-1 md:mt-2 lg:mt-4'>
                    <Button classes={['mr-2','mb-2','sm:mb-0']} to="/service/eyelash" text='Eyelashes' />
                    <Button classes={['mr-2','mb-2','sm:mb-0']} to="/service/bridal" text='Bridals' />
                    <Button classes={['mr-2','mb-2','sm:mb-0']} to="/service/nailextension" text='Nail Extension' />
                    <Button classes={['mr-2','mb-2','sm:mb-0']} to="/service/skinservices" text='Skin Services' />
                </div>
                <div className='flex mt-3 md:mt-10 lg:mt-6'>
                    <Button norouter={true} onClick={bookAppointmentClickHandler} variant="secondary" text='Book Appointment' />
                </div>

            </div>

        </div>
    );
}

export default VideoBgBanner;