import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking)
    return (
        <div>
            <h1 className='text-3xl mb-4 font-bold'>Payment Now</h1>
        </div>
    );
};

export default Payment;