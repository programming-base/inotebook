import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
export const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
  const [status, setStatus] = useState(null);
  const [user,setUser]=useState(null)
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    fetch("http://localhost:3000/", {
      method: "GET",
      credentials: "include", 
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data) {
          setUser(data.user)
          setStatus(data.isAuthenticated);
        } else {
          setStatus(null);
        }
      })
      .catch((err) => {
        console.error("Session check failed:", err);
        setLoading(false);
        setStatus(null);
        setUser(null)
      });
  }, []);

  return (
    <AuthContext.Provider value={{ status, loading ,user}}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
