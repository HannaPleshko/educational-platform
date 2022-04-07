import { useState, useCallback, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';


export const useHttp = () => {
  const auth = useContext(AuthContext);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(url, { method, body, headers });
      const data = await response.json();

      if (data.token) auth.login(data.token);

      if (!response.ok) throw new Error(data.message || 'Что-то пошло не так');

      return data;
    } catch (e) {
      throw e;
    }
  }, []);


  return { request };
};
