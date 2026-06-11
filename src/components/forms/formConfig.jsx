import { CourseIntrested, HowDoYouKnow, WorkExperience } from "../../data/mockData";
import { TaskPurpose, TaskStatus } from "../../data/tasksMockData";

 export const formConfig = {
  login: {
    fields: [
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true,
        placeholder: "",
        errorMessage: "Email is required",
        disabled:false
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        required: true,
        placeholder: "",
        errorMessage: "Password is required",
        disabled:false
      }
    ]
  },
  student: {
    fields: [
      {
        name: "courseIntrested",
        label: "Course Intrested",
        type: "select",
        required: true,
        placeholder: "",
        errorMessage: "Course intrested is required",
        options: CourseIntrested,
        disabled:false,
        
      },
      {
        name: "workExperience",
        label: "Work Experience",
        type: "checkbox",
        required: true,
        placeholder: "",
        errorMessage: "Work Experience is required",
        options: WorkExperience,
        disabled:false,
        breakAfter: true
      },
      {
        name: "fullname",
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "",
        maxLength: 50,
        errorMessage: "Fullname is required",
        disabled:false,
      },
      {
        name: "contactNumber",
        label: "Contact Number",
        type: "number",
        required: true,
        placeholder: "",
        minLength: 9,
        maxLength:10,
        errorMessage: "Contact number is required",
        disabled:false
      },  
      {
        name: "alternateNumber",
        label: "Alternate Number",
        type: "number",
        required: true,
        placeholder: "",
        minLength: 9,
        maxLength:10,
        errorMessage: "Alternate number is required",
        disabled:false
      }, 
      {
        name: "emailId",
        label: "Email Id",
        type: "email",
        required: true,
        placeholder: "",
        maxLength: 100,
        errorMessage: "Email Id is required",
        disabled:false
      },
      {
        name: "qualification",
        label: "Qualification",
        type: "text",
        required: true,
        placeholder: "",
        maxLength: 50,
        errorMessage: "Qualification is required",
        disabled:false,
      },
      {
        name: "yearOfPassing",
        label: "Year of Passing",
        type: "number",
        required: true,
        placeholder: "",
        maxLength: 4,
        errorMessage: "Year of Passing is required",
        disabled:false,
      },
     
      {
        name: "address",
        label: "Address",
        type: "textarea",
        required: true,
        placeholder: "",
        maxLength: 10,
        errorMessage: "Address is required",
        disabled:false,
        colSize:8,
        breakAfter: true
      },
      
      {
        name: "howDoYouKnow",
        label: "How Do You Know About VCube",
        type: "checkbox",
        required: true,
        placeholder: "",
        errorMessage: "This feild is required",
        options: HowDoYouKnow,
        colSize:12,
        disabled:false
      },
    ]
  },
  tasks: {
    fields: [
      {
        name: "purpose",
        label: "Task Purpose",
        type: "select",
        required: true,
        placeholder: "",
        errorMessage: "Task Purpose is required",
        options: TaskPurpose,
        disabled:false,
      },
      {
        name: "status",
        label: "Task Status",
        type: "select",
        required: true,
        placeholder: "",
        errorMessage: "Task Status is required",
        options: TaskStatus,
        disabled:false,
      },
      {
        name: "title",
        label: "Task Title",
        type: "text",
        required: true,
        placeholder: "",
        maxLength: 50,
        colSize:12,
        errorMessage: "Task Title is required",
        disabled:false,
      },
      {
        name: "description",
        label:"Task Description",
        type: "textarea",
        required: false,
        placeholder: "",
        maxLength: 10,
        errorMessage: "Address is required",
        disabled:false,
        colSize:12,
        breakAfter: false
      }, 
      {
        name: "reminder",
        label: "Reminder Date & Time",
        type: "datetime-local",
        required: true,
        placeholder: "",
        colSize:12,
        errorMessage: "Reminder Date & Time is required",
        disabled:false,
      }
    ]
  },
  reschedule: {
    fields: [
      {
        name: "status",
        label: "Task Status",
        type: "select",
        required: true,
        placeholder: "",
        errorMessage: "Task Status is required",
        options: TaskStatus,
        colSize:6,
        disabled:false,
      },
      {
        name: "reminder",
        label: "Reminder Date & Time",
        type: "datetime-local",
        required: true,
        placeholder: "",
        colSize:6,
        errorMessage: "Reminder Date & Time is required",
        disabled:false,
      }
    ]
  },
};



