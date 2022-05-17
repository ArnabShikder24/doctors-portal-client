import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content px-12 py-8 bg-[#f1f5f9]">
        {/* Page content here */}
            <Outlet></Outlet>
        </div> 
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* Sidebar content here */}
            <li><Link to='/dashboard'>My Appointments</Link></li>
            <li><Link to='/dashboard/dashreview'>My Reviews</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;