import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import PolicyPage from './pages/PolicyPage';

const App = () => {
  return (
    <>
    <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/policy" element={<PolicyPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
