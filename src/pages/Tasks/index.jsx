import React, { useState } from 'react';
import TaskList from './TaskList';
import { tasksData as mockTasks } from '../../data/tasksMockData';
import { GrRefresh } from 'react-icons/gr';
import { MdAddTask } from "react-icons/md";
import AddTask from '../../components/forms/AddTask';
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from '../../context/GlobalProvider';

export default function Tasks() {
    const navigate = useNavigate();
  const [latestTasks, setLatestTasks] = useState(mockTasks);
  const { openModal, closeModal } = useGlobalContext();


  const handleAddNewTask = (newTask) => {
    setLatestTasks(prev => [...prev, newTask]);
  };

  const handleAddCommentToTask = (updatedTask) => {
    setLatestTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const handleAddTask = () => {
    openModal(
      "Add New Task",
      <AddTask
        type="add"
        data={null}
        onSubmit={handleAddNewTask}
        closeModal={closeModal}
      />,
      "md"
    );
  };

  const handleRowClick = (singleTask) => {
    openModal(
      "View Task",
      <ViewTask
        type="view"
        task={singleTask}
        onSubmit={handleAddCommentToTask}
        closeModal={closeModal}
      />,
      "lg"
    );
  };

  const handleMore = () => {
    navigate("/view-all-tasks");
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h3 className="font-semibold text-gray-800">Task Management</h3>

        <div className="flex items-center gap-3">
          <button
            title="Refresh"
            className="text-blue-600 hover:text-blue-800"
          >
            <GrRefresh size={18} />
          </button>

          <button
            title="Add New Task"
            onClick={handleAddTask}
            className="text-blue-600 hover:text-blue-800"
          >
            <MdAddTask size={20} />
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="divide-y">
        <TaskList tasks={latestTasks} rowClick={handleRowClick} />

        <div
          onClick={handleMore}
          className="py-3 text-center text-blue-600 cursor-pointer hover:bg-gray-50 font-medium"
        >
          View All Tasks
        </div>
      </div>
    </div>
  );
}
