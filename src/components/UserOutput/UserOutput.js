import React, { Component, PropTypes } from 'react';
import '../UserIO.css'

class UserOutput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="card p-3 my-1">
        		<h6>User Output</h6>
        		<p>Paragraph One {this.props.userName}</p>
                <p>Paragraph Two</p>
        	</div>
        );
    }
}

export default UserOutput;
