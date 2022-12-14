import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Pages/Sheards/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const DashboardLayout = () => {
    const {user} = useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email)
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
                    <ul className="menu p-4 w-80 text-base-content">
                    
                    <li><Link to='/dashboard'>Appointments</Link></li>
                   
                    {
                        isAdmin && 
                        <>
                             <li><Link to='/dashboard/alluser'>All Users</Link></li>
                             <li><Link to='/dashboard/adddoctor'>Add a Doctor</Link></li>
                             <li><Link to='/dashboard/manageddoctor'>Manage Doctors</Link></li>
                        </>
                    }
                    
                    </ul>
                
                </div>
        </div>
            
        </div>
    );
};

export default DashboardLayout;