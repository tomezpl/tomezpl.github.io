import {create} from "zustand/react";

type AppStore = {
    counter: number;
    incrementCount(): void;
};

export const useStore = create<AppStore>((set) => ({
    counter: 0,
    incrementCount: () => {
        debugger
        return set((state) => ({counter: state.counter + 1}))
    },
}))