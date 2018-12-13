import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="AboutLinux" id="About">
                <h2>Dlaczego właściwie Linux? <i className="fab fa-linux fa-lg"></i> </h2>
                <h3>
                    <i className="fas fa-check "></i> Linux jest otwartym systemem operacyjnym, co oznacza, że każdy ma wgląd do jego
              kodu źródłowego i może go modyfikować. <br /><br />
                    <i className="fas fa-check"></i> Jest najpopularnieszy na świecie. W dużej mierze za sprawą Androida, którego jądro
              jest linuxowe.<br /><br />
                    <i className="fas fa-check"></i> Popularny macOS jest uniksopodonym systemem.<br /><br />
                    <i className="fas fa-check"></i> Jest stabilny (w odróżnieniu od Windowsa) oraz darmowy. <br /><br />
                    <i className="fas fa-check"></i> Dzięki stabilności jest stosowany jako system operacyjny większości serwerów na
              świecie. <br /><br />
                    <i className="fas fa-check"></i> Jest wykorzystywany przez banki, instytucje finansowe czy wojsko. <br /><br />
                    <i className="fas fa-check"></i> Jest używany w superkomputerach. <br /><br />
                    <i className="fas fa-check"></i> Linux może być oczywiście również wykorzystywany w celach prywatnych, zamiast
                    Windowsa.
            </h3>
            </div>
        )
    }
}
export default About