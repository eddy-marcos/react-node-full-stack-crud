import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../actions/tasks';
import styles from './task.module.css'


const Task = ({ task, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.taskItem}>
   
      <p style={{color: 'aqua'}}>{task.title}</p>
      <p>
        <span style={{marginRight: 5}}>Status:</span>
       <span style={{color: `${task.status === 'new' ? 'white' : task.status === 'in-progress' ? 'yellow' : 'green'}`}}>
        {task.status}
       </span>
      </p>

      <div className={styles.actions}>
        <button onClick={() => setCurrentId(task._id)}>
          <MoreHorizIcon/>
        </button>
        <button onClick={() => dispatch(deleteTask(task._id))}>
          <DeleteIcon />
        </button>
      </div>

      <p className={styles.modified}> <span >Last Modified: </span>
        {moment(task.createdAt).fromNow()}</p>

    </div>
  );
};

export default Task;
