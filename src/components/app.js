import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBarExampleIcon from './navbar'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div>
          <AppBarExampleIcon />
          <div className='main'>
            <SearchBar />
            <WeatherList />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
