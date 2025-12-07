import axios from "axios";
import React, { useEffect, useState } from "react";

const useLoadData = () => {
  const [data, setData] = useState([]);
  const [backupData,setBackupData]=useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/toyData.json")
      .then((res) => {
        setData(res.data);
        setBackupData(res.data)
      })
      .catch((error) => {
        setError(error.code);
      })
      .finally(() => {
        setLoading(false);
      });


  }, []);
  return { data, setData, error, setError, loading, setLoading,backupData };
};

export default useLoadData;
