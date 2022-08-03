//########################
//Handout assignment 1a
//########################

// import React, { Component } from 'react';

// class ClassComp extends Component {
//     constructor(props) {
//         super(props);
//         this.setState = { input: props.data }
//     }
//     render() {
//         return (
//             <div className='classComp'>
//                 This is a class component: {this.props.data}
//             </div>
//         )
//     }
// }

// export default ClassComp;

//########################
//Handout assignment 1b
//########################

// import React, { Component } from 'react';

// class ClassComp extends Component {
//     constructor(props) {
//         super(props);
//         this.reset();
//     }
//     reset(){
//         this.state = {
//             input: ''
//         };
//     }
//     render() {
//         return (
//             <div className='classComp'>
//                 This is a class component:{this.state.input} <br/>
//                 <input type='text' onChange={e=> this.handleChange(e)} />
//             </div>
//         );
//     }
//     handleChange(e){
//         const val = e.target.value;
//         this.setState({
//             input: val
//         });
//     }
// }

// export default ClassComp;

//########################
//Handout assignment 2 controlled & shared state
//########################
// import React, { Component } from 'react';
// class ClassComp extends Component {
//   render() {
//     return (
//       <div className='classComp'>
//         This is a class component: {this.props.stringIn} <br />
//         <input type='text' value={this.props.stringIn} onChange={this.props.getData} />
//       </div>
//     );
//   }
// }
// export default ClassComp;