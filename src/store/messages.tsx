import { create } from "zustand";

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

const useMessageStore = create<MessageStoreState>((set) => ({
  messages: [],
  addMessage: (message) => set((state) => {
    if (!message) {
      console.error("Message is missing 'to' field:", message);
      return state;
    }
    return { messages: [...state.messages, message] };
  }),
  setMessages: (messages) => set({ messages }),
}));

export default useMessageStore;