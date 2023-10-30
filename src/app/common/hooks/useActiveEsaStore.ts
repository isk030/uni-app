import { create } from 'zustand';

interface activeEsaStore {
    activeEsa: string;
    setActiveEsa: (value: string) => void;
}

export const useActiveEsaStore = create<activeEsaStore>()((set) => ({
    activeEsa: '',
    setActiveEsa: (value) => set(() => ({ activeEsa: value })),
}));
