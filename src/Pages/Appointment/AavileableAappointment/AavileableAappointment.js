import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentModal from '../AppointmentModal/AppointmentModal';
import AppointmentOptions from '../AppointmentOptions/AppointmentOptions';

const AavileableAappointment = ({selectedDate}) => {
    // const [appointmentOptions, setAppointmentOptions]=useState([]);
    const [tretment, setTretment] = useState(null);
    const date = format(selectedDate, "PP");

    const {data:appointmentOptions=[],isLoading,refetch} = useQuery({
        queryKey:['appointmentOption',date],
        queryFn: ()=>fetch(`https://doctor-portal-server-ten-beta.vercel.app/appointmentOption?date=${date}`)
        .then(res=>res.json())
    })
    if(isLoading){
        return <h1 className='text-2xl font-bold text-green-600 text-center my-12'>Loading...</h1>
    }
    // useEffect(()=>{
    //     fetch('https://doctor-portal-server-ten-beta.vercel.app/appointmentOption')
    //     .then(res=>res.json())
    //     .then(data=>setAppointmentOptions(data))
    // },[])
    return (
        <section className='my-12'>
            <p className='text-xl font-bold text-center text-secondary'>You have selected Date: {format(selectedDate, 'PP')}</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
                {
                    appointmentOptions.map(option=><AppointmentOptions
                        key={option._id}
                        option={option}
                        setTretment={setTretment}
                    ></AppointmentOptions>)
                }
                { tretment &&
                    <AppointmentModal
                    tretment={tretment}
                    selectedDate={selectedDate}
                    setTretment={setTretment}
                    refetch={refetch}
                    ></AppointmentModal>
                }
            </div>
        </section>
    );
};

export default AavileableAappointment;