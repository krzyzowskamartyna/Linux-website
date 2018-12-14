import React, { Component } from 'react';
import About from './About';
import Footer from './Footer';
import Toolbar from './navComponents/Toolbar/Toolbar';
import SideDrawer from './navComponents/SideDrawer/SideDrawer';
import Backdrop from './navComponents/Backdrop/Backdrop';
import Commend from './Commends/Commends';
import SimpleExpansionPanel from './Examples';
import Link from './Link';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="App" style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="App-header">
          <div className="landing-text ">
            <h1>Naucz się Linuxa</h1>
            <h2>naprawdę warto <i className="far fa-smile"></i> </h2>
            <a href="#About" className="btn">Dalej</a>
          </div>
        </div>
        <About />
        <Commend />
        <SimpleExpansionPanel />
        <Link />
        <Footer />
      </div>
    );
  }
}

export default App;
