import React from 'react';

const AppointmentOptions = ({option}) => {
    const {name,slots}=option;
    return (
        <div className=" text-center bg-base-100 shadow-xl border border-secondary rounded-md">
            <div className="card-body text-center">
                <h2 className="text-2xl font-semibold text-primary text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0]:'Try Aanother day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces':'space'} Available</p>
                <div className=" text-center">
                <button className="btn btn-primary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;