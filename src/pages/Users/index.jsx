import React from 'react';
import CustomDataTable from '../../components/core/CustomDataTable/CustomDataTable';
import { userHeaders, usersData } from '../../data/mockData';
import { FaUserPlus } from 'react-icons/fa';
import { useGlobalContext } from '../../context/GlobalProvider';
import AddUser from '../../components/forms/AddUser';
import { useNavigate } from "react-router-dom";
import { mainMenuItems } from '../../data/mockData';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import Tasks from '../Tasks';  

const Users = () => {
     const filteredMenuItems = mainMenuItems.filter(item => item.label !== 'Tasks');
    const [tasks, setTasks] = useState([]);
  
    const navigate = useNavigate();
  const { showToast, openModal, closeModal } = useGlobalContext();

  const handleEditCraneSubmit = () => {
    showToast(
      "Updated Successful!",
      "User details are updated successfully!"
    );
    closeModal();
  };

  const handleAddUser = () => {
    openModal(
      "Add User",
      <AddUser
        type="add"
        data={null}
        onSubmit={handleEditCraneSubmit}
        closeModal={closeModal}
      />,
      "lg"
    );
  };

  const actionButtons = [
    <button
      key="add"
      onClick={handleAddUser}
      className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
    >
      <FaUserPlus className="text-base" />
      Add User
    </button>
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <CustomDataTable
          displayType="users"
          cardClass="bg-white rounded-lg shadow"
          tableClass="w-full text-sm"
          headerStyles="text-gray-700 font-semibold"
          headerText="User Details"
          headers={userHeaders}
          rows={usersData}
          actionButtons={actionButtons}
        />
      </div>
    </div>
  );
};

export default Users;
