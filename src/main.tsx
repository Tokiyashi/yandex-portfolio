import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {ThemeProvider} from "@mui/material";
import {createCustomTheme} from "@/utils/customTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createCustomTheme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
