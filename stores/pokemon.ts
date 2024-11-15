/* eslint-disable no-unused-vars */
import { IPokemonItem } from '@/app/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StateType = {
  favoriteList: IPokemonItem[];
  saveToFavorite: (value: IPokemonItem) => void;
  removeFromFavorite: (id: number) => void;
};

export const usePokemonStore = create<StateType>()(
  persist(
    (set, get) => ({
      favoriteList: [],
      saveToFavorite: (value) => {
        const currentFavoriteList = get().favoriteList;
        set({ favoriteList: [...currentFavoriteList, value] });
      },
      removeFromFavorite: (id) => {
        const currentFavoriteList = get().favoriteList;
        const updatedList = currentFavoriteList.filter(
          (pokemon) => pokemon.id !== id
        );
        set({ favoriteList: updatedList });
      },
    }),
    {
      name: 'pokemon-store',
    }
  )
);
