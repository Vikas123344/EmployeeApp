import React from 'react';

const TaskList = ({ tasks, rowClick }) => {
  return (
    <>
      {tasks
        .filter(task => task.status !== 'completed')
        .map(task => (
          <div
            key={task.id}
            onClick={() => rowClick(task)}
            className="cursor-pointer px-4 py-3 border-b hover:bg-gray-50 transition"
          >
            <h6 className="text-sm font-semibold text-blue-600">
              {task.title}
            </h6>

            <p className="text-sm text-gray-700">
              {task.description.length > 70
                ? task.description.slice(0, 70) + '...'
                : task.description}
            </p>

            <small className="text-xs text-gray-500">
              Reminder: {new Date(task.reminder).toLocaleString()}
            </small>
          </div>
        ))}
    </>
  );
};

export default TaskList;
