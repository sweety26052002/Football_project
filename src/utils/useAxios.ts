import { useState } from "react";
import axios, { AxiosResponse, Method } from "axios";

interface UseAxiosReturn<T> {
  response: AxiosResponse<T> | null;
  error: Error | null;
  loading: boolean;
  request: (method: Method, url: string, data?: T) => Promise<void>;
}

const useAxios = <T = unknown>(): UseAxiosReturn<T> => {
  const [response, setResponse] = useState<AxiosResponse<T> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const request = async (method: Method, url: string, data?: T) => {
    setLoading(true);
    try {
      const res = await axios({ method, url, data });
      setResponse(res);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err);
      } else {
        setError(new Error("An unknown error occurred."));
      }
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, request };
};

export default useAxios;
