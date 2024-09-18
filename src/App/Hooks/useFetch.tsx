import axios from "axios";
import { useEffect, useState } from "react";

export interface Post_Interface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export const useFetch = (url: string) => {
  const [postData, setPostData] = useState<Post_Interface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getFullProductsList = async () => {
    try {
      setIsLoading(true);
      const responce = await axios.get(url);
      setPostData(responce.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFullProductsList();
  }, []);

  return { postData, isLoading, isError };
};
