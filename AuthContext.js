// import { createContext, useContext, useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import api from "../utils/api";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);


//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser({ ...decodedUser, token }); // ✅ Store token along with user data
//       } catch (error) {
//         console.error("Invalid token:", error);
//         localStorage.removeItem("token");
//         setUser(null);
//       }
//     }
//   }, []);
  

//   const login = async (userData) => {
//     try {
//       console.log("Login response data:", userData); // Debugging
  
//       localStorage.setItem("token", userData.token);
//       const decodedUser = jwtDecode(userData.token);
//       setUser({ ...decodedUser, token: userData.token });
  
//     } catch (error) {
//       console.error("Login failed:", error.message);
//     }
//   };
          
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use authentication context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };




import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      try {
        const decodedUser = jwtDecode(token); // Decode for ID & email
        setUser({ ...JSON.parse(storedUser), token }); // Merge stored user data with token
      } catch (error) {
        console.error("Invalid token:", error);
        logout(); // If token is invalid, clear everything
      }
    }
  }, []);

  const login = async (userData) => {
    try {
      console.log("Login response data:", userData); // Debugging

      // Store token
      localStorage.setItem("token", userData.token);
      // Store full user object separately
      localStorage.setItem("user", JSON.stringify(userData.user));

      // Decode token
      const decodedUser = jwtDecode(userData.token);

      // Merge token with user data and set state
      setUser({ ...userData.user, token: userData.token });

    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
