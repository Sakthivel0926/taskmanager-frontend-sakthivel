"use client";

import { createContext } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  // LOGIN
  const loginUser = async (username, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        router.push("/dashboard");

        return { success: true };
      } else {
        alert(data.detail || "Invalid Credentials");
        return { success: false };
      }
    } catch (error) {
      console.log("Login Error:", error);
      return { success: false };
    }
  };

  // REGISTER
  const registerUser = async (username, email, password) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful");

        router.push("/login");

        return { success: true };
      } else {
        alert(data.message || "Registration Failed");

        return { success: false };
      }
    } catch (error) {
      console.log("Register Error:", error);
      return { success: false };
    }
  };

  // LOGOUT
  const logoutUser = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");

    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        loginUser,
        registerUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};