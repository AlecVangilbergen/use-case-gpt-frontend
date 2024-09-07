import axios from "axios";

const API_URL = 'https://192.168.0.159:8000'    // Change this to your backend URL

export const register = async (userData: any) => {
    try {
        const config = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors", // Ensure CORS mode
        };
        const response = await axios.post(`${API_URL}/users/create`, userData, config);
        return response.data;
    } catch (error: any) {
        throw error.response.data.detail || "An error occurred while registering";
    }
    };

export const getAllUsers = async () => {
    try {
        const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors", // Ensure CORS mode
        };
        const response = await axios.get(`${API_URL}/users`, config);
        return response.data;

    }
    catch (error: any) {
        throw error.response.data.detail || "An error occurred while fetching users";
    }};

export const getUserByEmail = async (email: string) => {
    try {
        const config = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors", // Ensure CORS mode
        };
        const response = await axios.get(`${API_URL}/users/email/${email}`, config);
        return response.data;
    } catch (error: any) {
        throw error.response.data.detail || "An error occurred while fetching user";
    }
}