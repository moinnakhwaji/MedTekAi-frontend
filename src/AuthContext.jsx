import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(localStorage.getItem("access") || null);
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refresh") || null);

    useEffect(() => {
        if (refreshToken) {
            refreshAccessToken(); // Refresh token on app start
        }
    }, [refreshToken]);

    const login = async (username, password) => {
        try {
            const response = await axios.post("/api/login/", { username, password });
            
            setAccessToken(response.data.access);
            setRefreshToken(response.data.refresh);
            setUser(response.data.user);

            localStorage.setItem("access", response.data.access);
            localStorage.setItem("refresh", response.data.refresh);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            console.log("RESPOSNE", response)
            console.log("ACESS", response.data.access)
            console.log("REFRESH", response.data.access)
            console.log("USER ID", response.data.user.id)

            // Fetch user profile after login
            await fetchUserProfile(response.data.access, response.data.user.id);

            return response.data.user; // Return user object
        } catch (error) {
            console.error("Login failed:", error);
            throw new Error("Invalid credentials");
        }
    };

    const logout = () => {
        setUser(null);
        setAccessToken(null);
        setRefreshToken(null);
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        localStorage.removeItem("userProfile"); // Clear profile data

    };

    const signup = async (username, password, confirmPassword) => {
        try {
            console.log("🔹 Signing up user:", username);

            const response = await axios.post("/api/signup/", {
                username,
                password,
                confirm_password: confirmPassword,
            });

            console.log("✅ Signup successful, response:", response.data);

            // Immediately log the user in after signup
            const userData = await login(username, password);
            console.log("✅ User logged in after signup:", userData);

            return userData; // Return user to continue process
        } catch (error) {
            console.error("Signup failed:", error.response?.data || error);
            throw new Error(error.response?.data?.error || "Signup failed");
        }
    };




    const refreshAccessToken = async () => {
        try {
            const response = await axios.post("/api/token/refresh/", { refresh: refreshToken });
            setAccessToken(response.data.access);
            localStorage.setItem("access", response.data.access);
        } catch (error) {
            console.error("Token refresh failed, logging out");
            logout();
        }
    };

    const fetchUserProfile = async (token, userId) => {
        try {
            console.log("Fetching user data with token:", token);
    
            // Step 1: Fetch user details
            const userResponse = await axios.get(`/api/users/${userId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
    
            const { role, profile } = userResponse.data;
            console.log("User Role:", role);
            console.log("Fetched Profile:", profile);
    
            if (!profile) {
                console.error("Profile not found for user.");
                return;
            }
    
            // Step 2: Determine the profile type based on role
            const profileEndpoint = role === "patient" ? `/api/patients/${profile}/` : `/api/doctors/${profile}/`;
    
            // Step 3: Fetch the specific profile data
            const profileResponse = await axios.get(profileEndpoint, {
                headers: { Authorization: `Bearer ${token}` },
            });
    
            console.log("Fetched Profile Data:", profileResponse.data);
    
            // Set user data with the fetched profile
            setUser((prevUser) => ({ ...prevUser, profile: profileResponse.data }));
    
            // Store the profile data in localStorage
            localStorage.setItem("userProfile", JSON.stringify(profileResponse.data));
    
        } catch (error) {
            console.error("Failed to fetch user profile:", error);
        }
    };
    



    return (
        <AuthContext.Provider value={{ user, accessToken, login, logout, fetchUserProfile, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
