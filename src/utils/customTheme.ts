import {createTheme} from "@mui/material";

export function createCustomTheme() {
  return createTheme({
    palette: {
      primary: {
        main: '#ec3a53',
        light: '#fc8392',
        dark: '#611f3e'
      },
      secondary: {
        main: '#f4a655',
      },
      background: {
        default: '#c1ccd5'
      }
    }
  })
}