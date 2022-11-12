import React, { useState } from 'react';
import AavileableAappointment from '../AavileableAappointment/AavileableAappointment';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';

const Appointment = () => {
    const [selectedDate, setSelectedDate]=useState(new Date())
    return (
        <div className='my-12'>
            <AppointmentBanner 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            ></AppointmentBanner>
            <AavileableAappointment
            selectedDate={selectedDate}
            ></AavileableAappointment>
        </div>
    );
};

export default Appointment;