import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManagedDoctors = () => {
    const {data:doctors=[], isLoading}=useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
            try{
                const res = await fetch('http://localhost:5000/doctors',{
                    headers:{
                        authorization:`bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch(error){

            }
        }
    });
    if(isLoading){
        return <h1 className='text-2xl font-bold text-green-600 text-center my-12'>Loading...</h1>
    }
    return (
        <div>
            <h1 className='text-3xl mb-4 font-bold'>Manage Doctors {doctors.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Specialty</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        doctors.map((doctor,i)=>
                        <tr>
                            <th>{i+1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={doctor.image} alt={doctor.name}/>
                                    </div>
                                </div>
                            </td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialty}</td>
                            <td>{doctor.email}</td>
                            <td><button className="btn btn-sm hover:bg-red-600 hover:text-white">Delete</button></td>
                        </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagedDoctors;