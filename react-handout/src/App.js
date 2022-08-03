//###########################################
//Handout assignment 1a
//###########################################
// import React, { useState} from 'react';
// import FunComp from './FunComp';
// import ClassComp from './ClassComp';

// function App() {
//   const inputRef = useRef();
//   const [stringIn, setStr] = useState('');

//   function handleOnchange() {
//     const inputSrc = inputRef.current.value;
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
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [tasks, setTasks] = useState([]);
  const LOCAL_STORAGE_KEY = 'tasks.todo';

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks]);

  const handleInput = () => {
    let input = document.getElementById('input');
    if (input.value === '') return;
    setTasks(prevState => {
      return [{ id: uuidv4(), input: input.value }, ...prevState]
    });
  }

  const handleComplete = () => {

  };

  return (
    <div className='App'>
      <input id='input' />
      <button onClick={handleInput}>Submit</button>

      {tasks.map(task => <div className='blub'>{task.input}<button onChange={handleComplete}>Task Complete!</button></div>)}
      <TaskList tasks={tasks} />
    </div>
  )
}

function TaskList(tasks) {
  return (
  <div>{tasks.id}</div>
  )
}

export default App