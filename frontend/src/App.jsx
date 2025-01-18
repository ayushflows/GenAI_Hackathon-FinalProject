import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import UserInputPage from './pages/UserInputPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/userinput" element={<UserInputPage />} />
        <Route path="/result" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
