import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import DM from './components/messages/DirectMessages';
import { useAuth } from './hooks/useAuth';

function App() {
    const { user } = useAuth();

    return (
        <Router>
            {user && <Navbar />} {/* Render Navbar if the user is authenticated */}
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? (
                            // If authenticated, show the main content
                            <Outlet />
                        ) : (
                            // If not authenticated, redirect to the login page
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route path="/login" element={user ? <Navigate to="/home" replace /> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to="/home" replace /> : <Signup />} />
                <Route
                    path="/profile"
                    element={user ? <Profile /> : <Navigate to="/login" replace />}
                />
                <Route path="/feed" element={user ? <Feed /> : <Navigate to="/login" replace />} />
                <Route
                    path="/direct-messages"
                    element={user ? <DM /> : <Navigate to="/login" replace />}
                />
                <Route path="/home" element={user ? <Home /> : <Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}

export default App;