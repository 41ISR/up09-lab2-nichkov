import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IAppUser {
  id: string;
  socketId?: string;
}
interface User {
  user: string | undefined;
  users: IAppUser[];
  setUserId: (id: string) => void;
  setUsers: (users: IAppUser[]) => void;
}
export interface Message {
  from: string;
  to: string;
  message: string;
  timestamp: string;
}

interface MessageStoreState {
  messages: Message[];
  addMessage: (message: Message) => void;
  setMessages: (messages: Message[]) => void;
}




export const useMessageStore = create<MessageStoreState>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => {
    if (!message.to) {
      console.error("Message is missing 'to' field:", message);
      return state;
    }
    return { messages: [...state.messages, message] };
  }),
  setMessages: (messages) => set({ messages }),
}));

export const UsersStore = create<User>()(
  persist(
    (set) => ({
      user: undefined,
      users: [],
      setUserId: (userId) => {
        set((state) => {
          return { ...state, user: userId };
        });
      },
      setUsers: (users) => {
        set((state) => {
          return { ...state, users: users };
        })
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
      name: "users",
    }

  )

);
