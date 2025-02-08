import axios from 'axios';
import { BASE_URL } from '../src/constants/constants';
const api = axios.create({
  baseURL: `${BASE_URL}/api/quiz`,
});

export const fetchQuestions = () => api.get('/questions');
export const submitQuizAnswers = (answers) => api.post('/submit', { answers });