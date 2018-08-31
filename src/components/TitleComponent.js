import React, { Component } from 'react';
    
// Function to handle title change
// var customVal = "";
// var handleTitleChange = (customVal) => (event)=> {
//     this.props.myHighOrderFunction( event.target.value);
// };

class Title extends Component {


    render() {
        return (
        <div className="title">
            <h1>Keaton Gallagher</h1>
            {/* <select onChange={this.handleTitleChange(customVal)}></select> */}
        </div>
    )};
};


export default Title;