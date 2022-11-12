import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';

const AavileableAappointment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions]=useState([]);
    useEffect(()=>{
        fetch('appointmentOption.json')
        .then(res=>res.json())
        .then(data=>setAppointmentOptions(data))
    },[])
    return (
        <section className='my-12'>
            <p className='text-xl font-bold text-center text-secondary'>You have selected Date: {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    appointmentOptions.map(option=><AppointmentOptions
                        key={option._id}
                        option={option}
                    ></AppointmentOptions>)
                }
            </div> 
        </section>
    );
};

export default AavileableAappointment;