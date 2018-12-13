import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <a href="#About">Dlaczego Linux</a>
                </li>
                <li>
                    <a href="#commend">Najważniejsze komendy</a>
                </li>
                <li>
                    <a href="#About">Przykłady</a>
                </li>
                <li>
                    <a href="#About">Test</a>
                </li>
                <li>
                    <a href="#About">Bash</a>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer