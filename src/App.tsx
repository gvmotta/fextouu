import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomePage from './assets/pages/Home'

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#FFA726',
        main: '#F46400',
        dark: '#DD2C00',
        contrastText: '#fff',
      },
      secondary: {
        light: '#484848',
        main: '#212121',
        dark: '#000',
        contrastText: '#fff',
      },
      text: {
        primary: '#222222',
        secondary: '#757575',
      }
    },
    typography: {
      fontFamily: [
        'Inter',
        'Roboto',
        'sans-serif'
      ].join(','),
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
