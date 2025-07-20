import { useState } from 'react';
import api from '../services/api';

const useEvaluation = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const evaluate = async (text) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/evaluate', { text });
      if (response.data.success) {
        setResult(response.data.results);
      } else {
        setError('Evaluasi gagal. Mohon coba lagi.');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Terjadi kesalahan saat evaluasi.');
    } finally {
      setLoading(false);
    }
  };

  return { result, loading, error, evaluate };
};

export default useEvaluation;
