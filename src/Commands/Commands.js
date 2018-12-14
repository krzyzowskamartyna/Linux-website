import React, { Component } from 'react';
import Demo from './FloatingActionButtonZoom';
class Command extends Component {
    render() {
        return (
            <div className="commands" id="command">
                <h2>Najważniejsze rzeczy do opanowania <i className="far fa-list-alt"></i></h2>
                <Demo />
            </div >
        );
    }
}

export default Command;