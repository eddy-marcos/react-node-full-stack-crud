import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task/Task';
import styles from './tasks.module.css'

const Tasks = ({ setCurrentId }) => {
  const tasks = useSelector((state) => state.tasks);

  return (
    !tasks.length ? <h3 className={styles.h3}>No Tasks, add some</h3> : (
      <>
        <div className={styles.newTasksContainer} data-testid="todos">
          {tasks.map((task) => (
            <div key={task._id}>
              <Task task={task} setCurrentId={setCurrentId} />
            </div>
          ))}
        </div>

      </>

    )
  );
};

export default Tasks;
