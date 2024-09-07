import axios from "axios";

const API_URL = '/api'    // Change this to your backend URL


export const sendMessage = async (message: any, userId: any) => {
    try {
        const response = await axios.post(`${API_URL}/chat`, {
            query: message,
            user_id: userId
        });

        return response.data.response;
    } catch (error) {
        console.error("Error during chat:", error);
        return "Sorry, something went wrong.";
    }
}