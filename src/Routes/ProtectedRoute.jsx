import React from 'react';
import { Outlet } from 'react-router-dom';
import { logo } from '../assets';
import DynamicNav from '../components/Menu/DynamicNav';
import Topbar from '../components/Topbar';

const ProtectedRoute = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side Menu */}
      <aside className=" bg-gray-900 p-0 w-16 md:w-64
      transition-all duration-300 ease-in-out
    flex flex-col">
        <div className="flex items-center justify-center md:justify-start mb-4 pr-px">
          <img
            src={logo}
            alt="Logo"
            className="h-10 md:h-auto md:w-full"
          />
        </div>
        <DynamicNav />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-0">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedRoute;
