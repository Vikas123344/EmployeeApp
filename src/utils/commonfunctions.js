import * as yup from 'yup';

export const shouldRenderHeader = (path) => {
    return ['/forgot-password'].includes(path)
}
export const generateUniqueNumber=(input) =>{
    const randomNum = Math.floor(Math.random() * 90000) + 10000; // Generate a random number between 10000 and 99999
    const uniqueNum = (randomNum + input).toString().slice(-5); // Add the input to the random number and take the last 5 digits
    return uniqueNum;
}

export const getYupSchema = (fields) => {
  const shape = {};

  fields.forEach(field => {
      if (field.required) {
          switch (field.type) {
              case 'text':
                  shape[field.name] = yup.string()
                      .matches(/^[a-zA-Z0-9&$@_\- ]*$/, `${field.label} can only contain letters, numbers, $, &, @, _, -, and spaces`)
                      .max(field.maxLength, `${field.label} must be at most ${field.maxLength} characters`)
                      .required(field.errorMessage);
                  break;

              case 'number':
                  shape[field.name] = yup.number()
                      .positive(`${field.label} must be a positive number`)
                      .integer(`${field.label} must be an integer`)
                      .typeError(`${field.label} must be a number`)
                      .max(9999999999, `${field.label} must be at most 10 digits`)
                      .required(field.errorMessage);
                  break;

              case 'email':
                  shape[field.name] = yup.string()
                      .email(`${field.label} must be a valid email address`)
                      .required(field.errorMessage);
                  break;

              case 'select':
                  shape[field.name] = yup.string()
                      .required(field.errorMessage);
                  break;

                case 'checkbox':
                    shape[field.name] = yup.array()
                        .of(yup.string())
                        .min(1, `${field.label} must have at least one selection`)
                        .required(field.errorMessage);
                    break;

              case 'password':
                  shape[field.name] = yup.string()
                      .min(6, `${field.label} must be at least 6 characters`)
                      .required(field.errorMessage);
                  break;

              case 'tel':
                  shape[field.name] = yup.string()
                      .matches(/^\+?[1-9]\d{1,14}$/, `${field.label} must be a valid phone number`)
                      .required(field.errorMessage);
                  break;

              case 'date':
                  shape[field.name] = yup.date()
                      .required(field.errorMessage);
                  break;

              default:
                  shape[field.name] = yup.string().required(field.errorMessage);
                  break;
          }
      }
  });

  return yup.object().shape(shape);
};

export const transformTodayEnquiryData = (data) => {
    const columnsToInclude = [
      'contactNumber', 'qualification', 'emailId'
    ];
    const transformedData = data.map((student, index) => {
      const { fullname, enquiryId, ...rest } = student;
      const message = columnsToInclude
        .map(col => rest[col])
        .filter(value => value !== undefined && value !== null)
        .join(' - ');
      return { 
        header: fullname,
        message: message,
        id: enquiryId
      };
    });
    const sortedData = transformedData.sort((a, b) => b.studentId - a.studentId);
    return sortedData.slice(0, 5);
  };
  export function getInterviewStatusBadge(score) {
    if (score >= 9) {
      return "Excellent"; // Excellent (9-10)
    }
    if (score >= 7) {
      return "Good"; // Good (7-8)
    }
    if (score >= 5) {
      return "Needs Improvement"; // Needs Improvement (5-6)
    }
    return "Poor"; // Poor (0-4)
  }
  export function getInterviewRatingBadge(rating) {
    if (rating >= 9) return "success";
    if (rating >= 7) return "primary";
    if (rating >= 5) return "warning";
    return "danger";
  }
  export function calculateInterviewFinalRating(categories) {
    const totalScore = categories.reduce((sum, category) => sum + category.score, 0);
    const averageScore = totalScore / categories.length;
    return Math.round(averageScore); // Round to the nearest whole number
}