import { create } from 'zustand';

export const usestore = create((set) => ({
    id : '-1',
    setselectedpokemonid : (selectedid:any) => set({id : selectedid})
}));