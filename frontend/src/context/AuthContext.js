import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext(); // Export AuthContext as a named export

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (userCredentials) => {
        // Implement your authentication logic here (e.g., API calls)
        // If authentication is successful, set the user in state.
        setUser(userCredentials);
    };

    const signOut = () => {
        // Implement sign-out logic if needed.
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};