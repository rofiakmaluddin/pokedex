'use client';

import PokemonCard from '@/components/card/PokemonCard';
import { usePokemonStore } from '@/stores/pokemon';

export default function Home() {
  const { favoriteList } = usePokemonStore();

  return (
    <>
      <div className="text-3xl font-bold text-center mb-10">
        Favorite Pokemon List
      </div>
      <div className="grid grid-cols-4 gap-5">
        {favoriteList.map((item, idx) => {
          const newItem = {
            ...item,
            isFavorite: true,
          };
          return (
            <PokemonCard
              item={newItem}
              key={`${idx}-${newItem.name}-${newItem.image}`}
            />
          );
        })}
      </div>
    </>
  );
}
