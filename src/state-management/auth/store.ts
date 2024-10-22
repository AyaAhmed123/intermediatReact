import { create } from "zustand";

interface StoreAuth {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}
const useStoreAuth = create<StoreAuth>((set) => ({
  user: "",
  login: (username) => set(() => ({ user: username })),
  logout: () => set(() => ({ user: "" })),
}));
export default useStoreAuth;
