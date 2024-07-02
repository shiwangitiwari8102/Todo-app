// src/components/TaskList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTask(index));
  };

  const handleEdit = (index) => {
    const updatedTask = prompt('Edit task:', tasks[index]);
    if (updatedTask) {
      dispatch(editTask(index, updatedTask));
    }
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task}
          <button style={{float:"right",marginLeft: "10px"  }} onClick={() => handleEdit(index)}><span><FontAwesomeIcon icon={faEdit} /></span></button>
          <button style={{float:"right",}} onClick={() => handleDelete(index)}><span><FontAwesomeIcon icon={faTrashAlt} /></span></button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
