import React from 'react';
import { Route, Routes } from 'react-router-dom';  
import Login from '../pages/Login';
import PublicRoute from './PublicRoute';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';
import AssignAssetForm from "../pages/AssignAssetForm";
import EmployeesPage from '../pages/Emplyees';
import ProfilePage from '../pages/ProfilePage';
import AssetList from '../pages/AssetList';
import Reports from '../pages/Report';
import Maintenance from '../pages/Maintenance';

const AppRoutes = () => {
  return (
    <Routes> 
      <Route path='/' element={<PublicRoute />}>
        <Route index element={<Login />} />
      </Route>
      <Route path='/' element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/AssignAssetForm' element={<AssignAssetForm />}/>
        <Route path='/view-all-tasks' element={<EmployeesPage />} />
        <Route path='/settings' element={<ProfilePage />} />
        <Route path='/student-enquiries' element={<AssetList />} />
        <Route path='/users' element={<Reports />} />
        <Route path='/course-list' element={<Maintenance />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
