import { FaHome, FaUser, FaListAlt, FaCalendar, FaRegAddressCard, FaChalkboardTeacher, FaMoneyBill, FaCogs, FaUsers, FaChalkboard, FaCalendarAlt, FaUserGraduate, FaCheckCircle, FaPen, FaClipboardList, FaBookOpen, FaUserCheck, FaFileAlt  } from 'react-icons/fa';
import { javaIcon, pythonIcon, mernIcon, nextIcon, powerBIIcon, webIcon, testingIcon, reactIcon, 
  fastapiIcon,apiIcon
} from '../assets'; 

 
export const CoursesList = [
  { id:1, href: '/view-single-course', icon: testingIcon, label: 'Testing Tools' },
  { id:2, href: '/view-single-course', icon: javaIcon, label: 'Java Fullstack' },
  { id:3, href: '/view-single-course', icon: pythonIcon, label: 'Python Fullstack' },
  { id:4, href: '/view-single-course', icon: reactIcon, label: 'React JS' },
  { id:5, href: '/view-single-course', icon: webIcon, label: 'Web Technologies' },
  { id:6, href: '/view-single-course', icon: mernIcon, label: 'MERN Fullstack' },
  { id:7, href: '/view-single-course', icon: nextIcon, label: 'NEXT JS Fullstack' },
  { id:8, href: '/view-single-course', icon: powerBIIcon, label: 'Power BI' },
  { id:9, href: '/view-single-course', icon: fastapiIcon, label: 'FastAPI Fullstack' },
  { id:10, href: '/view-single-course', icon: apiIcon, label: 'API Testing' },
];

export const  courseStats = [
  { title: 'Total Batches', count: 100, icon: <FaCalendarAlt /> },
  { title: 'Number of Students', count: 200, icon: <FaUserGraduate /> },
  { title: 'Active Instructors', count: 10, icon: <FaChalkboardTeacher /> },
  { title: 'Completed Courses', count: 50, icon: <FaCheckCircle /> },
  { title: 'Pending Assignments', count: 25, icon: <FaPen /> },
];

export const batchTabs = ["All", "Running", "Complete", "Practicals", "Demo"]
export const batchHeaders = [
  { key: "batchNo", label: "Batch No" },
  { key: "batchTime", label: "Batch Time" },
  { key: "startDate", label: "Start Date" },
  { key: "endDate", label: "End Date" },
  { key: "totalStudents", label: "Total Students" },
  { key: "status", label: "Status" }
];
export const batchData = [
  { batchId:1, batchNo: "B001", batchTime: "08:00 AM", startDate: "2024-08-01", endDate: "2024-08-10", totalStudents: 30, status: "Running" },
  { batchId:2, batchNo: "B002", batchTime: "09:00 AM", startDate: "2024-08-02", endDate: "2024-08-11", totalStudents: 25, status: "Complete" },
  { batchId:3, batchNo: "B003", batchTime: "10:00 AM", startDate: "2024-08-03", endDate: "2024-08-12", totalStudents: 28, status: "Partials" },
  { batchId:4, batchNo: "B004", batchTime: "11:00 AM", startDate: "2024-08-04", endDate: "2024-08-13", totalStudents: 32, status: "Demo" },
  { batchId:5, batchNo: "B005", batchTime: "12:00 PM", startDate: "2024-08-05", endDate: "2024-08-14", totalStudents: 29, status: "Running" },
  { batchId:6, batchNo: "B006", batchTime: "01:00 PM", startDate: "2024-08-06", endDate: "2024-08-15", totalStudents: 31, status: "Complete" },
  { batchId:7, batchNo: "B007", batchTime: "02:00 PM", startDate: "2024-08-07", endDate: "2024-08-16", totalStudents: 27, status: "Partials" },
  { batchId:8, batchNo: "B008", batchTime: "03:00 PM", startDate: "2024-08-08", endDate: "2024-08-17", totalStudents: 34, status: "Demo" },
  { batchId:9, batchNo: "B009", batchTime: "04:00 PM", startDate: "2024-08-09", endDate: "2024-08-18", totalStudents: 26, status: "Running" },
  { batchId:10, batchNo: "B010", batchTime: "05:00 PM", startDate: "2024-08-10", endDate: "2024-08-19", totalStudents: 33, status: "Complete" },
  { batchId:11, batchNo: "B011", batchTime: "06:00 PM", startDate: "2024-08-11", endDate: "2024-08-20", totalStudents: 30, status: "Partials" },
  { batchId:12, batchNo: "B012", batchTime: "07:00 PM", startDate: "2024-08-12", endDate: "2024-08-21", totalStudents: 35, status: "Demo" },
  { batchId:13, batchNo: "B013", batchTime: "08:00 AM", startDate: "2024-08-13", endDate: "2024-08-22", totalStudents: 29, status: "Running" },
  { batchId:14, batchNo: "B014", batchTime: "09:00 AM", startDate: "2024-08-14", endDate: "2024-08-23", totalStudents: 32, status: "Complete" },
  { batchId:15, batchNo: "B015", batchTime: "10:00 AM", startDate: "2024-08-15", endDate: "2024-08-24", totalStudents: 31, status: "Partials" },
  { batchId:16, batchNo: "B016", batchTime: "11:00 AM", startDate: "2024-08-16", endDate: "2024-08-25", totalStudents: 28, status: "Demo" },
  { batchId:17, batchNo: "B017", batchTime: "12:00 PM", startDate: "2024-08-17", endDate: "2024-08-26", totalStudents: 34, status: "Running" },
  { batchId:18, batchNo: "B018", batchTime: "01:00 PM", startDate: "2024-08-18", endDate: "2024-08-27", totalStudents: 27, status: "Complete" },
  { batchId:19, batchNo: "B019", batchTime: "02:00 PM", startDate: "2024-08-19", endDate: "2024-08-28", totalStudents: 33, status: "Partials" },
  { batchId:20, batchNo: "B020", batchTime: "03:00 PM", startDate: "2024-08-20", endDate: "2024-08-29", totalStudents: 30, status: "Demo" },
  { batchId:21, batchNo: "B021", batchTime: "04:00 PM", startDate: "2024-08-21", endDate: "2024-08-30", totalStudents: 32, status: "Running" },
  { batchId:22, batchNo: "B022", batchTime: "05:00 PM", startDate: "2024-08-22", endDate: "2024-08-31", totalStudents: 26, status: "Complete" },
  { batchId:23, batchNo: "B023", batchTime: "06:00 PM", startDate: "2024-08-23", endDate: "2024-09-01", totalStudents: 31, status: "Partials" },
  { batchId:24, batchNo: "B024", batchTime: "07:00 PM", startDate: "2024-08-24", endDate: "2024-09-02", totalStudents: 29, status: "Demo" },
  { batchId:25, batchNo: "B025", batchTime: "08:00 AM", startDate: "2024-08-25", endDate: "2024-09-03", totalStudents: 28, status: "Running" },
];

export const batchStats = [
  { title: 'Total Students', count: 88, icon: <FaUserGraduate /> },
  { title: 'Mock Tests', count: 19, icon: <FaClipboardList /> },
  { title: 'Case Studies', count: 22, icon: <FaBookOpen /> },
  { title: 'Mock Interviews', count: 4, icon: <FaUserCheck /> },
  { title: 'Assignments', count: 14, icon: <FaFileAlt /> },
];

export const demoClassesData = [
  {
    className: 'Python Full Stack',
    demoClasses: [
      { id: 1, date: '20th May, 2024', time: '08:00 AM' },
      { id: 2, date: '22nd May, 2024', time: '10:00 AM' },
      { id: 3, date: '28th May, 2024', time: '04:00 PM' }
    ],
    images: [
      '/assets/presentations/presentation1.png', 
      '/assets/presentations/presentation2.png', 
      '/assets/presentations/presentation3.png'
    ],
  },
  {
    className: 'Java Full Stack',
    demoClasses: [
      { id: 1, date: '09th May, 2024', time: '09:00 AM' },
      { id: 2, date: '02nd May, 2024', time: '11:00 AM' },
      { id: 3, date: '25th May, 2024', time: '03:00 PM' }
    ],
    images: [
      '/assets/presentations/presentation2.png', 
      '/assets/presentations/presentation3.png', 
      '/assets/presentations/presentation1.png'
    ],
  },
  {
    className: 'Azure',
    demoClasses: [
      { id: 1, date: '20th May, 2024', time: '09:30 AM' },
      { id: 2, date: '22nd May, 2024', time: '11:30 AM' },
      { id: 3, date: '28th May, 2024', time: '02:30 PM' }
    ],
    images: [
      '/assets/presentations/presentation3.png', 
      '/assets/presentations/presentation1.png', 
      '/assets/presentations/presentation2.png'
    ],
  },
  {
    className: 'Testing Tools',
    demoClasses: [
      { id: 1, date: '09th May, 2024', time: '09:00 AM' },
      { id: 2, date: '02nd May, 2024', time: '11:00 AM' },
      { id: 3, date: '25th May, 2024', time: '03:00 PM' }
    ],
    images: [
      '/assets/presentations/presentation1.png', 
      '/assets/presentations/presentation2.png', 
      '/assets/presentations/presentation3.png'
    ],
  }
];

