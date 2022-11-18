import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Sheards/NavBar/NavBar';
import { Link } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashbord-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="dashbord-drawer" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    
                    <li><Link to='/dashboard'>Appointments</Link></li>
                    <li><Link to='/dashboard/alluser'>All Users</Link></li>
                    </ul>
                
                </div>
        </div>
            
        </div>
    );
};

export default DashboardLayout;