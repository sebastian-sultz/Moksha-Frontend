import axios from 'axios';

const api = axios.create({
  baseURL: 'http://13.233.79.254:8080/api/quiz',
});

export const fetchQuestions = () => api.get('/questions');
export const submitQuizAnswers = (answers) => api.post('/submit', { answers });