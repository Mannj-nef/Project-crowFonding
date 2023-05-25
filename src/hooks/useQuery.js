import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

/**
 *
 * @param {string} url
 * @param {string} value
 * @returns {{data: [], isloading: boolean}}
 */

const useQuery = (url = null, value = null) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      const getData = async () => {
        if (!value) return;
        setIsLoading(true);

        const apiUrl = `${url}/${value}`;
        const { data } = await axios.get(apiUrl);

        setIsLoading(false);
        setData(data);
      };

      getData();
    } catch (error) {
      toast.error(error);
    }
  }, [url, value]);

  return { data, isloading };
};

export default useQuery;
