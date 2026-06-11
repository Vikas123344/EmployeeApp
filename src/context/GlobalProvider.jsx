import React, { createContext, useContext, useEffect, useState } from 'react';
import ToastMessage from '../components/core/ToastMessage';
import CustomModal from '../components/core/CustomModal/CustomModal';
import { useLocation, useNavigate } from 'react-router-dom';

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [toast, setToast] = useState({ open: false, heading: '', message: '' });
  const [modal, setModal] = useState({ open: false, title: '', content: null, actions: null });
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      if (location?.pathname === '/') {
        navigate('/dashboard');
      }
    } 
    else {
      if (location?.pathname === '/forgot-password') {
        navigate('/forgot-password');
      } else  if (location?.pathname !== '/') {
        navigate('/');
      }
    }
  }, [location.pathname, navigate]);

  const showToast = (heading, message) => {
    setToast({ open: true, heading, message });
  };

  const closeToast = () => {
    setToast({ open: false, heading: '', message: '' });
  };

  const openModal = (title, content, width = "sm", actions = null, ) => {
    setModal({ open: true, title, content, width, actions });
  };

  const closeModal = () => {
    setModal({ open: false, title: '', content: null, actions: null });
  };

  const setUserDetails = (userDetails) => {
    setUser(userDetails);
  };
  const setTodayEnquiries = (enquiries) => {
    setEnquiries(enquiries);
  };
 
  return (
    <GlobalContext.Provider value={{ showToast, closeToast, openModal, closeModal, setUserDetails, user, modal, enquiries,setTodayEnquiries }}>
      {children}
      {toast.open && (
        <ToastMessage open={toast.open} heading={toast.heading} message={toast.message} onClose={closeToast} />
      )}
      {modal.open && (
        <CustomModal open={modal.open} title={modal.title} actions={modal.actions} width={modal.width} onClose={closeModal}>
          {modal.content}
        </CustomModal>
      )}
    </GlobalContext.Provider>
  );
};
