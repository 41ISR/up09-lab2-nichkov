import axios from "axios";
const BASE_URL = "https://api.ktkv.dev";
const Instance = axios.create({ baseURL: BASE_URL });


export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: number;
  imdbID: string;
}

export interface User {
  id: string;
}

interface iSearchMovieRDO {
  Response: string;
  totalResults: string;
  Search: IMovie[];
}

interface loginRDO {
  id: string;
}


const Api = {
  login: async (id: string) => {
    const res = await Instance.post<loginRDO>("/login", {id: id});
    console.log(res.data);
    return res.data;
  },
  // searchSingleMovie: async (id: string) => {
  //   const result = await Instance.get<SingleMovie>("", {
  //     params: { apikey: API_KEY, i: id },
  //   });
  //   console.log(result.data);
  //   return result.data;
  // },
};
export default Api;