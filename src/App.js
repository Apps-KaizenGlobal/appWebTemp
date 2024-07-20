import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LandingPage from './pages/landing';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      
    </Router>
  );
}

export default App;
