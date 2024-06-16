import axios from 'axios';

const API_URL = 'http://localhost:8082/api/auth';

export const register = (user) => axios.post(`${API_URL}/register`, user);
export const login = (user) => axios.post(`${API_URL}/login`, user);
export const findByEmail = (email) => axios.get(`${API_URL}/find-by-email`, { params: { email } });
