import { create } from "zustand";

interface StoreCounter {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}
// set=>({})
const useStoreCounter = create<StoreCounter>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set(() => ({ max: 10 })),
}));
export default useStoreCounter;
