import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import linuxData from './linuxData';
import vimData from './vimData';

function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
});
class FloatingActionButtonZoom extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {

    const { classes, theme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Linux" />
            <Tab label="VI" />
            <Tab label="Bash" />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            {linuxData.map((linux, key) => (
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}
                  key={linux.id}
                  className="heading"
                >
                  {linux.heading}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  key={linux.id}
                  className="inside"
                >

                  {linux.inside} <br />
                  {linux.inside2} <br />
                  {linux.inside3} <br />
                  {linux.inside4}


                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}

          </TabContainer>
          <TabContainer dir={theme.direction}>
            {vimData.map((vim, key) => (
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<i className="far fa-question-circle"></i>}
                  key={vim.id}
                  className="heading"
                >
                  {vim.heading}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                  key={vim.id}
                  className="inside"
                >
                  <ul key={key}>
                    {vim.inside} <br />
                    {vim.inside2} <br />
                    {vim.inside3} <br />
                    {vim.inside4}
                  </ul>

                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}

          </TabContainer>


          <TabContainer dir={theme.direction}>
            <div className="Bash">
              <i className="fas fa-terminal"></i> skrypt rozpoczyna się od ciągu <p>#!/bin/bash </p>
              <i className="fas fa-terminal"></i> skrypt może być wykonany na dwa sposoby:<br />
              <p> bash mojSkrypt.sh</p>
              <p> ./mojSkrypt.sh</p> (po wcześniejszej zmianie praw dostępu) <br />  <br />
              <i className="fas fa-terminal"></i> zmienna może być przypisywana w następujący sposób <p>zmienna=wartość</p>
              a korzysta się z niej używając symbolu $
              <p>echo $zmienna</p>
              <i className="fas fa-terminal"></i> Istnieją również tak zwane zmienne specjalne, przykładowo $0 oznacza nazwę bierzącego skrypu lub powłoki, a $1..$9 to parametry przekazywane do skrypu <br />
              <br />    <i className="fas fa-terminal"></i> środowisko powłoki Bash umożliwia wykonywanie podstawowych operacji arytmetycznych <br />  <br />
              <i className="fas fa-terminal"></i> Bash zapewnia również wiele typów pętli: <br />
              - Pętla for <br />
              - Pętla while <br />
              - Pętla until <br /> <br />
              Ich proste zastosowanie znajduje się w przykładach poniżej <br />  <br />
              <i className="fas fa-terminal"></i> W Bashu można tworzyć również instrukcje warunkowe takie jak: if ... then ... fi,  czy case  <br /> <br />

              <i className="fas fa-terminal"></i> Bash 3.0 posiada wbudowaną obsługę wyrażeń regularnych
                </div>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FloatingActionButtonZoom.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FloatingActionButtonZoom);