import axios from 'axios';

const API_URL = 'http://localhost:8082/api/ticket-offers';

export const getAll = () => axios.get(API_URL);
export const create = (ticketOffer) => axios.post(API_URL, ticketOffer);
export const remove = (id) => axios.delete(`${API_URL}/${id}`);

