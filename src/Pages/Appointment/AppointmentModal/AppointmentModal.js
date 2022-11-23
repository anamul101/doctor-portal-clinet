import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AppointmentModal = ({tretment,setTretment,selectedDate,refetch}) => {
    const {user}=useContext(AuthContext);
    const {name,slots,price} = tretment;
    const date = format(selectedDate,'PP');
    const handelBooking=(e)=>{
        e.preventDefault();
        const form = e.target;
        const slot=form.slot.value;
        const customerName= form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const bookingDate ={
            appointmentDate:date,
            treatment:name,
            slot,
            customerName,
            email,
            phone,
            price

        }
        console.log(bookingDate);
        fetch('https://doctor-portal-server-ten-beta.vercel.app/bookings',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(bookingDate)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                toast.success('Booking succesful')
                setTretment(null)
                refetch();
            }else{
                toast.error(data.message);
            }
           
        })
     
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handelBooking} className='mt-10 grid grid-cols-1 gap-6'>
                        <input type="text" disabled value={date} className="input input-bordered input-sm w-full" />
                        <select name='slot' className="select select-bordered select-sm w-full">
                            {
                                slots.map((slot,i)=><option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" defaultValue={user?.displayName} disabled className="input input-bordered input-sm w-full" />
                        <input name='email' type="email" placeholder="Email" defaultValue={user?.email} disabled className="input input-bordered input-sm w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-sm w-full" />

                        <input type="submit" value='Submit' className="btn bg-accent input-sm w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;