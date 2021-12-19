import React, { Component } from 'react';

class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        const onClick = function(e){
            e.preventDefault();
            this.props.onChangeMode(e.target.dataset.mode);
        }.bind(this);

        return (
            <nav>
                <ul>
                    <li><a href="/" data-mode='create' onClick={onClick}>create</a></li>
                    <li><a href="/" data-mode='udpate' onClick={onClick}>update</a></li>
                    <li><button data-mode='delete' onClick={onClick}>delete</button></li>
                </ul>
            </nav>
        );
    }
}

export default Control;