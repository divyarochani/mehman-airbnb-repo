
import React, { useContext, useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { authDataContext } from '../Context/AuthContext';
import axios from 'axios';
import { userDataContext } from '../Context/UserContext';
import { toast } from 'react-toastify';
import img1 from '../assets/airbnb-4.jpg'

function Login() {
    const [show, setShow] = useState(false);
    const { serverUrl, loading, setLoading } = useContext(authDataContext);
    const { setUserData } = useContext(userDataContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await axios.post(
                `${serverUrl}/api/auth/login`,
                { email, password },
                { withCredentials: true }
            );
            setUserData(result.data);
            toast.success("Login Successfully");
            navigate("/");
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
        setLoading(false);
    };

    return (
        
        <div className="w-full h-screen relative overflow-hidden">
            <div className="absolute inset-0 z-[-1] scale-105">
              {/* Background Image with Blur */}
              <div
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'blur(1px)',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }}
              ></div>
            
              {/* Bluish Overlay with Opacity */}
              <div
                style={{
                  backgroundColor: 'rgba(60, 90, 150, 0.2)', 
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                }}
              ></div>
            </div>
                <div className="w-full h-full flex items-center justify-center relative px-4">
                 {/* Back Button */}
            <div
                className="absolute top-6 left-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full cursor-pointer"
                onClick={() => navigate("/")}
            >
                <FaArrowLeftLong className="w-5 h-5" />
            </div>

            {/* Login Card */}
            <form
                onSubmit={handleLogin}
                className="bg-[#00000000] backdrop-blur-md w-full max-w-md rounded-xl shadow-2xl p-8 flex flex-col gap-6 text-black"
            >
                <h2 className="text-2xl font-semibold text-red-600 text-center">Welcome to Mehman</h2>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-white text-lg">Email</label>
                    <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-400 rounded-md px-4 py-2 text-base focus:outline-none focus:border-red-500"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2 relative">
                    <label htmlFor="password" className="text-white text-lg">Password</label>
                    <input
                        type="password"
                        id="password"
                        className="w-full border border-gray-400 rounded-md px-4 py-2 text-base focus:outline-none focus:border-red-500"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white text-lg py-2 rounded-md transition duration-300"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                {/* Sign up */}
                <p className="text-center text-white">
                    Don't have an account?
                    <span
                        className="text-red-500 ml-1 font-medium cursor-pointer hover:underline"
                        onClick={() => navigate("/SignUP")}
                    >
                        Sign Up
                    </span>
                </p>
            </form>
                    
                </div>
           
        </div>
    );
}

export default Login;

