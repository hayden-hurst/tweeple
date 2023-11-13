import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate, Outlet} from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Feed from './components/feed/Feed';
import Profile from './components/profile/Profile';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import DM from './components/messages/DirectMessages';
import { useAuth } from './hooks/useAuth';

function App() {
    // Use the useAuth hook to get the user's authentication status
    const { user, isLoading } = useAuth();

    // Define an array of routes where you want to display the Navbar
    const navbarRoutes = ['/feed', '/home', '/profile', '/direct-messages'];

    // State to track whether to display the Navbar
    const [shouldDisplayNavbar, setShouldDisplayNavbar] = React.useState(false);

    // useEffect to update the Navbar display when authentication status changes
    React.useEffect(() => {
        // Check if the user is authenticated and on a route where Navbar should be displayed
        setShouldDisplayNavbar(user && navbarRoutes.includes(window.location.pathname));
    }, [user, isLoading]);

    if (isLoading) {
        // You might want to show a loading indicator here
        return <div>Loading...</div>;
    }

    return (
        <Router>
            {shouldDisplayNavbar ? <Navbar /> : null} {/* Render Navbar only on certain components */}
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? (
                            // If authenticated, show the main content using Outlet
                            <Outlet />
                        ) : (
                            // If not authenticated, redirect to the login page
                            <Navigate to="/login" replace />
                        )
                    }
                />
                <Route
                    path="/login"
                    element={user ? <Navigate to="/home" replace /> : <Login />}
                />
                <Route
                    path="/signup"
                    element={user ? <Navigate to="/home" replace /> : <Signup />}
                />
                <Route
                    path="/profile"
                    element={user ? <Profile /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/feed"
                    element={user ? <Feed /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/direct-messages"
                    element={user ? <DM /> : <Navigate to="/login" replace />}
                />
                <Route
                    path="/home"
                    element={user ? <Home /> : <Navigate to="/login" replace />}
                />
            </Routes>
        </Router>
    );
}

export default App;