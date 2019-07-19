import React, { Component } from 'react';

class UserInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="card p-3 my-1">
        		<h6>User Input</h6>
        		<input className="form-control" onChange={this.props.on_changehandler} type="text" value={this.props.userName}/>
        	</div>
        );
    }
}

export default UserInput;
