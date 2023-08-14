import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_URL } from "../constants";
import { FormValues } from "./types";
import { toast } from "react-toastify";
import { Hero } from "../types";

const useHome = () => {
  const [history, setHistory] = useState<Hero[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { handleSubmit, getValues, register } = useForm<FormValues>();

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      const { search } = getValues();

      const { data }: any = await axios.get(
        `${API_URL}/get-superhero/${search}`
      );

      if (data.response === "error") {
        toast.error(data.error);
      } else {
        setHistory([...history, ...data.results]);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [history]);

  return {
    onSubmit: handleSubmit(onSubmit),
    isLoading,
    register,
    history,
  };
};

export default useHome;
