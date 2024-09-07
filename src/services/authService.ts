import axios from 'axios';

const API_URL = "http://192.168.0.159:8000" ;    // Change this to your backend URL

export const login = async (userData: any) => {
    try {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'  
            },
            mode: 'cors' // Ensure CORS mode
        };
        const response = await axios.post(`${API_URL}/login`, userData, config);
        return response.data;
    } catch (error: any) {
        throw error.response.data.detail || 'An error occurred while logging in';
    }
}

export const getLoggedInUserId = () => {
    const id =  sessionStorage.getItem('user_id');
    if (id) {
      return parseInt(id, 10);
    }
    return null;
  };


