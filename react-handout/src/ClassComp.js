import React, { Component } from 'react';

class ClassComp extends Component {
    constructor(props) {
        super(props);
       // console.log('CC',props);
        this.setState = {input: props.data}
       console.log(props.data);
    }
   
    render() {
        
        return(
            <div className='classComp'>
                This is a ClassComp: {this.props.parentToChild}
            </div>
        )
    }
}
 
export default ClassComp;