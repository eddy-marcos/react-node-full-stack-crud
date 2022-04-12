import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTask, updateTask } from '../../actions/tasks';
import styles from './form.module.css'

const Form = ({ currentId, setCurrentId }) => {
  const [taskData, setTaskData] = useState({ title: '', status: '' });
  const task = useSelector((state) => (currentId ? state.task.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (task) setTaskData(task);
  }, [task]);

  const clear = () => {
    setCurrentId(0);
    setTaskData({ title: '', status: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createTask(taskData));
      clear();
    } else {
      dispatch(updateTask(currentId, taskData));
      clear();
    }
  };

  return (
    <>
      <form autoComplete="off"
        onSubmit={handleSubmit}>

          <h1 className={styles.addTask}>Add Tasks</h1>
        <div>
          <textarea name="task" className={styles.textArea}
            rows="5" cols="33"
            required
            value={taskData.title}
            placeholder="Today I have to..."
            onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}>
          </textarea>
        </div>

        <div>
          <label htmlFor="status">Task Status:</label>

          <select name="status"
            value={taskData.status}
            onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}
          >
            <option value=""></option>
            <option value="new">New</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>

        </div>


        <button type="submit" className={styles.submit}>Submit</button>

      </form>
    </>
  );
};

export default Form;
