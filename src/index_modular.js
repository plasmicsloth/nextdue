import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TitleBar from './appbar.js'
import DaysSupply from './dayssupply.js'
import DatePickerExampleToggle from './datepicker.js'
import DaysEarly from './daysearly.js'
//import ThemeBar from './bottomnav.js'

const Layout = () => (
  <MuiThemeProvider>
  
    <TitleBar />
	
	<DaysSupply />
		
    <DatePickerExampleToggle />
	
	<DaysEarly />
	
  </MuiThemeProvider>
);

// RENDER
ReactDOM.render(
  <Layout />,
  document.getElementById("root")
);
