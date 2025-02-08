import { create } from "zustand";
import { persist } from "zustand/middleware";
interface User {
    user: string | undefined;
    setUserId: (id: string) => void;
  }
export const UsersStore = create<User>()(
  persist(
    (set) => ({
      user: undefined,
      setUserId: (userId) => {
        set(() => {
          return { user: userId };
        });
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