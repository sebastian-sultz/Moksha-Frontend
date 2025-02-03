import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/quiz',
});

export const fetchQuestions = () => api.get('/questions');
export const submitQuizAnswers = (answers) => api.post('/submit', { answers });