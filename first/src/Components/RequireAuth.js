// src/Components/RequireAuth.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RequireAuth = ({ children }) => {
  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to="/Sign" />;
  }

  return children;
};

export default RequireAuth;
