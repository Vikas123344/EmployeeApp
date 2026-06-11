import React from 'react';
import { NavLink } from 'react-router-dom';
import { mainMenuItems } from "../../data/mockData";
import './DynamicNav.css';

const DynamicNav = () => {
  return (
    <nav className="flex flex-col custom-menu">
      {mainMenuItems.map((item, index) => (
        <NavLink
          to={item.href}
          key={index}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 text-white 
          hover:bg-blue-700
             ${isActive ? 'bg-blue-700' : ''}`
          }
        >
          <span className="text-xl">
            {item.icon}
          </span>
          <span className='hidden md:inline'>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default DynamicNav;
