import axios from "axios";
import { useQuery } from "react-query";
import { IMusic } from "../types/musicTypes";

const useMusicQuery = (id: string = "") => {
  return useQuery<IMusic[] | IMusic>({
    queryKey: ["musicQuery"],
    staleTime: 2000,
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:5000/musics/${id}`);
      return data;
    },
  });
};

export default useMusicQuery;
