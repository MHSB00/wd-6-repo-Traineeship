//###########################################
//Handout assignment 1a
//###########################################
// import React, { useState} from 'react';
// import FunComp from './FunComp';
// import ClassComp from './ClassComp';

// function App() {
//   const [stringIn, setStr] = useState('');

//   function handleOnchange(e) {
//     const inputSrc = e.target.value;
//     setStr(inputSrc);
//   }
//   return (
//     <div className="App">
//       <input type="text" onChange={handleOnchange} />
//       <FunComp data={stringIn} />
//       <ClassComp data={stringIn} />
//     </div>
//   );
// }

// export default App;

//###########################################
//Handout assignment 1b 
//###########################################
// import FunComp from './FunComp';
// import ClassComp from './ClassComp';

// function App() {

//   return (
//     <div className="App">
//       <FunComp />
//       <ClassComp />
//     </div>
//   );
// }

// export default App;

//###########################################
//Handout assignment 2 controlled & shared state
//###########################################
// import React, { useState } from 'react';
// import FunComp from './FunComp';
// import ClassComp from './ClassComp';

// function App() {
//   const [stringIn, setStr] = useState('Jens');

//   const getData = (e) => {
//     setStr(e.target.value);
//   }

//   return (
//     <div className="App">
//       <FunComp getData={getData} stringIn={stringIn} />
//       <ClassComp getData={getData} stringIn={stringIn} />
//     </div>
//   );
// }

// export default App;

//###########################################
//Handout assignment 3 Lists and Keys
//###########################################
import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Tasklist from './Tasklist';

const LOCAL_STORAGE_KEY = 'tasks';


function App() {
  const [tasks, setTasks] = useState([]);
  const taskRef = useRef();
  const onlyOnce = useRef(false) //ignore first mount to get localstorage for strictmode

  useEffect(() => {
    if (onlyOnce.current) { return; }
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTasks) setTasks(storedTasks);
    onlyOnce.current = true;
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const handleComplete = (id) => {
    const newTasklist = [...tasks];
    const compTask = newTasklist.filter(task => task.id !== id);
    setTasks(compTask);
  }

  const handleInput = () => {
    const tasksInput = taskRef.current.value;
    if (tasksInput === '') return;
    setTasks(prevTasks => {
      return [{ id: uuidv4(), input: tasksInput }, ...prevTasks];
    });
    taskRef.current.value = null;
  }

  return (
    <>
      <input ref={taskRef} type='text' />
      <button onClick={handleInput}>Submit</button>
      <Tasklist tasks={tasks} handleComplete={handleComplete} />
    </>
  )
}

export default App;