"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (trimmedEmail === "user@example.com" && trimmedPassword === "123456") {
            document.cookie = "auth=true; path=/; max-age=86400";
            document.cookie = `email=${trimmedEmail}; path=/; max-age=86400`;

            toast.success("Login successful! 🎉");

            setTimeout(() => {
                router.push("/");
            }, 1000);
        } else {
            setError("Invalid email or password");
        }
    };

    const handleSocialLogin = (provider: string) => {
        setError("");

        document.cookie = "auth=true; path=/; max-age=86400";
        document.cookie = `email=${provider.toLowerCase()}@honeybite.com; path=/; max-age=86400`;

        toast.success(`${provider} login successful!`);

        setTimeout(() => {
            router.push("/");
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <Toaster position="top-right" reverseOrder={false} />

            <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Login to Aura
                    
                </h2>

                {error && (
                    <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded p-2">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-400 hover:text-black transition"
                    >
                        Login
                    </button>
                </form>

                {/* Social Login */}
                <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm mb-4">Or login with</p>
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => handleSocialLogin("google")}
                            className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                        >
                            <FcGoogle size={20} />
                            Google
                        </button>

                        <button
                            onClick={() => handleSocialLogin("github")}
                            className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
                        >
                            <FaGithub size={20} />
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;