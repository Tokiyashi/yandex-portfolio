import {createTheme} from "@mui/material";

export function createCustomTheme() {
  return createTheme({
    palette: {
      primary: {
        main: '#ec3a53',
        light: '#f4a655'
      },
      secondary: {
        main: '#fa4b13',
      },
      background: {
        default: '#c1ccd5'
      }
    }
  })
}