import { create } from "zustand";

interface StoreCounter {
  counter: number;
  increment: () => void;
  reset: () => void;
}
// set=>({})
const useStoreCounter = create<StoreCounter>((set) => ({
  counter: 0,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ counter: 0 })),
}));
export default useStoreCounter;
