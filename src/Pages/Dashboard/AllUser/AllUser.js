import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUser = () => {
    const {data: users=[], refetch}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res = await fetch('https://doctor-portal-server-ten-beta.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })
    const handelUpdate=(id)=>{
        fetch(`https://doctor-portal-server-ten-beta.vercel.app/users/admin/${id}`,{
            method:'PUT',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                toast.success('Make Admin Succesful');
                refetch();
            }
        })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold mb-3'>All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users?.map((user,i)=><tr key={user._id}>
                        <th>{i+1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {
                                user?.role !== "admin" && <button onClick={()=>handelUpdate(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>
                            }
                        </td>
                        <td><button className='btn btn-xs btn-dainger'>Delete</button></td>
                    </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;