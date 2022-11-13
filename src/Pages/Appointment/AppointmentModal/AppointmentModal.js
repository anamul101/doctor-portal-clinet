import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({tretment,setTretment,selectedDate}) => {
    const {name,slots} = tretment;
    const date = format(selectedDate,'PP');
    const handelBooking=(e)=>{
        e.preventDefault();
        const form = e.target;
        const slots=form.slots.value;
        const customerName= form.name.value;
        const email=form.email.value;
        const phone=form.phone.value;
        const bookingDate ={
            selectedDates:date,
            tretmentName:name,
            slots,
            customerName,
            email,
            phone

        }
        console.log(bookingDate);
        setTretment(null)
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
                        <select name='slots' className="select select-bordered select-sm w-full">
                            {
                                slots.map((slot,i)=><option value={slot} key={i}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your name" className="input input-bordered input-sm w-full" />
                        <input name='email' type="email" placeholder="Email" className="input input-bordered input-sm w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-sm w-full" />

                        <input type="submit" value='Submit' className="btn bg-accent input-sm w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;