import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const [loading, setLoading] = useState(false); // Added loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            await login(username, password);
            navigate(`/logedinhome`);
        } catch (err) {
            setError("Invalid username or password");
        } finally {
            setLoading(false); // Set loading to false after the process completes (for both login and signup)
        }
    };

    return (
        <>
            

            <div className="bg-[#0a0a0a] text-[#fafafa] font-sans min-h-screen flex items-center justify-center">
    <div className="bg-[#141414] bg-opacity-90 w-full max-w-md p-8 rounded-xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-400">Welcome Back!</h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username" className="block text-sm font-medium mb-2">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-[#1f1e24] border border-gray-700 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-500"
                    placeholder="Enter your username"
                    required
                />
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#1f1e24] border border-gray-700 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-gray-500"
                    placeholder="Enter your password"
                    required
                />
            </div>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-400 focus:outline-none transition duration-300 flex justify-center items-center"
                disabled={loading}
            >
                {loading ? <span className="spinner"></span> : "Login"}
            </button>
        </form>
        <div className="mt-8 text-center">
            <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <span
                    onClick={() => navigate("/signin")}
                    className="cursor-pointer text-green-500 hover:underline"
                >
                    Sign Up
                </span>
            </p>
        </div>
    </div>
</div>

            );

        </>
    );
};

export default Login;
