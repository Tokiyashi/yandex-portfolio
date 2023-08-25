import {createTheme} from "@mui/material";

export function createCustomTheme() {
  return createTheme({
    palette: {
      primary: {
        main: '#ec3a53',
        light: '#FF7A5C',
        dark: '#611f3e'
      },
      secondary: {
        main: '#F4D738',
        dark: '#fdba1e'
      },
      background: {
        default: '#ffffff',
        paper: '#87CEEB'
      }
    }
  })
}