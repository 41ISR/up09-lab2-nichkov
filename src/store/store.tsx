import { create } from "zustand";
import { persist } from "zustand/middleware";
import io from "socket.io-client";
import axios from "axios";
const socket = io("https://api.ktkv.dev", {
  withCredentials: true,
  transports: ["websocket", "polling"]
});

interface IAppUser{
  id:string;
  socketId?:string;
}
interface User {
    user: string | undefined;
    users: IAppUser[];
    setUserId: (id: string) => void;
    setUsers: (users: IAppUser[]) => void;
  }


export const UsersStore = create<User>()(
  persist(
    (set) => ({
      user: undefined,
      users:[],
      setUserId: (userId) => {
        set(() => {
          return { user: userId };
        });
      },
      setUsers:(users)=>{
        set(()=>{
          return {};
        })
      },
      fetchUsers: async () => {
        try {
          const response = await axios.get("https://api.ktkv.dev/users");
          set({ users: response.data });
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      },
    //   removeLikedMovies: (movie) => {
    //     set((state) => {
    //       return {
    //         ...state,
    //         likedMovies: [...state.likedMovies.filter((aId) => aId.imdbID !== movie.imdbID)],
    //       };
    //     });
    //   },
    }),
    {
      name: "Users",
    }
    
  )
  
);
socket.on('users', (users: User[]) => {
  UsersStore.getState().setUsers(users);
});
