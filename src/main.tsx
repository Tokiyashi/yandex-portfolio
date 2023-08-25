import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {createCustomTheme} from "@/utils/customTheme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={createCustomTheme()}>
      <CssBaseline/>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
