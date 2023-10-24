// useAuth.js
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Adjust the import path based on your file structure

export const useAuth = () => {
    return useContext(AuthContext);
};