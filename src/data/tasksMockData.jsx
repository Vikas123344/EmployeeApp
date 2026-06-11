
export const taskHeaders = [
  { key: 'id', label: 'ID' },
  { key: 'title', label: 'Title' },
  { key: 'purpose', label: 'Purpose' },
  { key: 'status', label: 'Status' },
  { key: 'reminder', label: 'Reminder' },
];
export const tasksData =[
  {
    "id": 1,
    "title": "Follow-Up with Client ABC",
    "description": "Call Client ABC to discuss the project updates and clarify any remaining questions. Confirm the next steps and set expectations for the upcoming week.",
    "purpose": "Follow-Up Call",
    "status": "Pending",
    "reminder": "2024-08-26T10:00",
    "comments": [
      {
        "comment": "Discussed the latest design changes with the team.",
        "datetime": "2024-08-25T14:30",
        "commentedBy":"Vinodh"
      },
      {
        "comment": "Client requested additional documentation before the call.",
        "datetime": "2024-08-25T16:45",
        "commentedBy":"Ram"
      },
      {
        "comment": "Reminder set for follow-up call on 2024-08-26 at 10:00 AM.",
        "datetime": "2024-08-25T17:00",
        "commentedBy":"Siva"
      }
    ]
  },  
  {
    "id": 2,
    "title": "Prepare Project Proposal for Client XYZ",
    "description": "Draft a comprehensive project proposal including scope, timeline, and cost estimates for Client XYZ. Ensure all client requirements are addressed and the proposal is ready for review by the end of the week.",
    "purpose": "Proposal Preparation",
    "status": "In Progress",
    "reminder": "2024-08-30T09:00",
    "comments": [
      {
        "comment": "Initial draft of the proposal is in progress.",
        "datetime": "2024-08-24T11:00",
        "commentedBy": "Anita"
      },
      {
        "comment": "Client has provided additional requirements. Update proposal accordingly.",
        "datetime": "2024-08-24T13:30",
        "commentedBy": "John"
      },
      {
        "comment": "Reminder set for proposal completion by 2024-08-30 at 9:00 AM.",
        "datetime": "2024-08-24T15:00",
        "commentedBy": "Raj"
      }
    ]
  },
  {
    "id": 3,
    "title": "Organize Team Meeting for Project Kickoff",
    "description": "Schedule and organize a team meeting to kick off the new project. Prepare the agenda and ensure all team members are available. Discuss initial tasks and project milestones.",
    "purpose": "Team Meeting",
    "status": "Scheduled",
    "reminder": "2024-08-27T14:00",
    "comments": [
      {
        "comment": "Meeting agenda has been drafted and sent to the team.",
        "datetime": "2024-08-25T10:00",
        "commentedBy": "Priya"
      },
      {
        "comment": "Team members confirmed their availability for the meeting.",
        "datetime": "2024-08-25T12:00",
        "commentedBy": "Sanjay"
      },
      {
        "comment": "Reminder set for team meeting on 2024-08-27 at 2:00 PM.",
        "datetime": "2024-08-25T14:00",
        "commentedBy": "Aarti"
      }
    ]
  }
];
export const TaskStatus = [
  { value: 'Open', label: 'Open' },
  { value: 'Created', label: 'Created' },
  { value: 'Updated', label: 'Updated' },
  { value: 'Pending', label: 'Pending' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'On Hold', label: 'On Hold' },
  { value: 'Scheduled', label: 'Scheduled' },
  { value: 'Cancelled', label: 'Cancelled' },
  { value: 'Awaiting Feedback', label: 'Awaiting Feedback' },
];
export const TaskPurpose = [
  { value: 'Follow-Up Call', label: 'Follow-Up Call' },
  { value: 'Payment Reminder', label: 'Payment Reminder' },
  { value: 'Pending Payment', label: 'Pending Payment' }
]
