import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './app.module.css';
import Tasks from './components/Tasks/Tasks';
import Form from './components/Form/Form';
import { getTasks } from './actions/tasks';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, [currentId, dispatch]);

  return (
    <div>
    <Header />
      <main className={styles.container}>
        <Form currentId={currentId} setCurrentId={setCurrentId} />
        <Tasks setCurrentId={setCurrentId} />
      </main>
    <Footer />
    </div>
  );
};

export default App;
