import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyAppointment = () => {
    const {user} =useContext(AuthContext);
    const url = `https://doctor-portal-server-ten-beta.vercel.app/bookings?email=${user?.email}`;

    const {data: bookings=[]}=useQuery({
        queryKey:['bookings',user?.email],
        queryFn: async ()=>{
            const res = await fetch(url,{
                headers:{
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
        
    })
    console.log(bookings)
    return (
        <div>
            <h1 className='text-3xl mb-4 font-bold'>My Appointment</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Treatment</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Price</th>
                        <th>Payment</th>
                    </tr>
                    </thead>
                <tbody>
                    { bookings.length > 0 &&
                        bookings?.map((booking,i)=> 
                        <tr key={booking._id}>
                        <th>{i+1}</th>
                        <td>{booking.customerName}</td>
                        <td>{booking.treatment}</td>
                        <td>{booking.appointmentDate}</td>
                        <td>{booking.slot}</td>
                        <td>{booking.price}</td>
                        <td>
                            {
                                booking.price && !booking.paid && 
                                <Link to={`/dashboard/payment/${booking._id}`}>
                                    <button className='btn btn-primary btn-sm'>
                                    Pay
                                    </button>
                                </Link>
                            }
                            {
                                booking.price && booking.paid && 
                                <span className='text=xl font-bold text-green-600'>Paid</span>
                            }
                        </td>
                        </tr>
                    )
                    }   
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;