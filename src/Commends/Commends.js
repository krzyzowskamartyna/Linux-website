import React, { Component } from 'react';
import Demo from './FloatingActionButtonZoom';
class Commend extends Component {
    render() {
        return (
            <div className="commends" id="commend">
                <h2>Najważniejsze rzeczy do opanowania <i class="far fa-list-alt"></i></h2>
                <Demo />
            </div >
        );
    }
}

export default Commend;