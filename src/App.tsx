import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import PolicyPage from './pages/PolicyPage';
import { createTheme, ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Router>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/policy" element={<PolicyPage />} />
            </Route>
          </Routes>
        </Router>
        </ThemeProvider>
    </>
  );
};

export default App;
