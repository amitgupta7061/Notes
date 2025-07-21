import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const BACKEND_URL = "http://localhost:5000/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('auth');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUser(parsed.user);
      setToken(parsed.token);
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/login`, {
        username,
        password,
      });

      const { token, name } = res.data;

      const authInfo = { user: name, token };
      localStorage.setItem('auth', JSON.stringify(authInfo));
      setUser(name);
      setToken(token);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.error || 'Login failed',
      };
    }
  };

  const signup = async (email, password, name) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/signup`, {
        fullName: name,
        username: email,
        password,
      });

      const { token, name} = res.data;

      const authInfo = { user: name, token };
      localStorage.setItem('auth', JSON.stringify(authInfo));
      setUser(name);
      setToken(token);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err.response?.data?.error || 'Signup failed',
      };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};