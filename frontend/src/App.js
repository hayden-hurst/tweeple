import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';


/*
react-router-dom is being used to route user to specific paths to for each component.
*/
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} /> {/*Default Path*/}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
