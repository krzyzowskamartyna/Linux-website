import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="spacer"></div>
            <div className="toolbar_items">
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
            </div>
        </nav>
    </header>
);
export default toolbar