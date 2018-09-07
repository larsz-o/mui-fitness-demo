import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createMuiTheme } from '@material-ui/core/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'


const theme = createMuiTheme({ 
    palette: {
        primary: {
            light: '#FFCC80', // same as '#FFCC80',
            main: '#FB8C00', // same as orange[600]
            dark: '#EF6C00',
            contrastText: 'rgb(0,0,0)'
          }
      }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
