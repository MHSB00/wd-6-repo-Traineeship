//#########################
//Handout assignment 1a
//#########################
// export default function FunComp(props) {
//     return (
//         <div className='funcComp'>
//             This is a functional component: {props.data}
//         </div>
//     )
// }

//#########################
//Handout assignment 1b
//#########################
// import React, { useState, useRef } from 'react';

// export default function FunComp() {
//     const inputRef = useRef();
//     const [stringIn, setStr] = useState('');

//     function handleChange(e) {
//         const stringIn = e.target.value;
//         setStr(stringIn);
//     }

//     return (
//         <div className='funcComp'>
//             This is a functional component: {stringIn}<br />
//             <input ref={inputRef} type='text' onChange={handleChange} />
//         </div>
//     )
// }

//#########################
//Handout assignment 2 controlled & shared state
//#########################
// import React from 'react';

// export default function FunComp({ getData, stringIn }) {
//     return (
//         <div className='funcComp'>
//             This is a functional component: {stringIn}  <br />
//             <input type='text' value={stringIn} onChange={getData} />
//         </div>
//     );
// }