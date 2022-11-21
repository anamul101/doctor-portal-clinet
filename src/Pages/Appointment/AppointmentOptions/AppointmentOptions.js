import React from 'react';

const AppointmentOptions = ({option,setTretment}) => {
    const {name,slots,price}=option;
    return (
        <div className=" text-center bg-base-100 shadow-xl border border-secondary rounded-md">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0]:'Try Aanother day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces':'space'} Available</p>
                <p>Price: ${price}</p>
                <div className=" text-center">
                
                <label 
                disabled={slots.length === 0}
                htmlFor="booking-modal" 
                className="btn btn-primary text-white"
                onClick={()=>setTretment(option)}
                >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;