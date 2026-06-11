import { BASE_URL, fetchWrapper } from '../config/apiConfig';
import { EnquiriesData } from '../data/mockData';
import { transformTodayEnquiryData } from '../utils/commonfunctions';

export const addStudentApi = async (formData) => {
    return {data:formData};
//   const token = localStorage.getItem('authToken');
//   const url = `${BASE_URL}/Student`;
//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${token}`,
//     },
//     body: JSON.stringify(formData),
//   };
//   try {
//     const response = await fetchWrapper(url, options, 5000);
//     return response;
//   } catch (error) {
//     throw new Error(error);
//   }
};

export const updateStudentApi = async (StudentId, formData) => {
  const token = localStorage.getItem('authToken');
  const url = `${BASE_URL}/Student/${StudentId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(formData),
  };

  try {
    const response = await fetchWrapper(url, options, 5000);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteStudentApi = async (StudentId) => {
  const token = localStorage.getItem('authToken');
  const url = `${BASE_URL}/Student/${StudentId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };

  try {
    const response = await fetchWrapper(url, options, 5000);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const viewAllStudents = async () => {
  const token = localStorage.getItem('authToken');
  const url = `${BASE_URL}/Student`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  };
  try {
    const response = await fetchWrapper(url, options, 5000);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const viewAllTodayEnquires = async (id) => {
  const token = localStorage.getItem('authToken');
  const url = `${BASE_URL}/Student/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`, 
    },
  };
  try {
    const response = await fetchWrapper(url, options, 5000);
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const viewTopTodayEnquires = async () => { 
  const transformedData = transformTodayEnquiryData(EnquiriesData);
  return {data:transformedData};

  // const token = localStorage.getItem('authToken');
  // const url = `${BASE_URL}/Student/${id}`;
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`, 
  //   },
  // };
  // try {
  //   const response = await fetchWrapper(url, options, 5000);
  //   return response;
  // } catch (error) {
  //   throw new Error(error.message);
  // }
};