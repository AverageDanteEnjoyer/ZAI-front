import axios from 'axios';

const API_URL = 'http://localhost:8082/api/auth';

export const register = (user) => axios.post(`${API_URL}/register`, user);
export const login = async (user) => {
    const response = await axios.post(`${API_URL}/login`, user, { withCredentials: true });
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};
export const logout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
};
export const getCurrentUser = () =>  {
    if(!localStorage.getItem('user'))return null;
    return JSON.parse(localStorage.getItem('user'))
};
export const isAuthenticated = () => !!getCurrentUser();
export const isAdmin = () => {
    const user = getCurrentUser();
    return user && user.admin;
};
