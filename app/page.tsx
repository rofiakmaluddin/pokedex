'use client';

import PokemonCard from '@/components/card/PokemonCard';
import { useGetAllPokemon, useGetPokemonByUrl } from './hooks';
import { useMemo } from 'react';
import { IPokemonItem } from './types';
import { Skeleton } from '@/components/ui/skeleton';

export default function Home() {
  const { data, isLoading } = useGetAllPokemon();

  return (
    <>
      <div className="text-3xl font-bold text-center mb-10">Pokemon List</div>
      <div className="grid grid-cols-4 gap-5">
        {isLoading &&
          Array(4)
            .fill('')
            .map((_, idx) => (
              <Skeleton key={idx} className="rounded-lg size-full" />
            ))}
        {!isLoading &&
          data?.data.results.map((item, idx) => (
            <PokemonData
              key={`${idx}-${item.name}-${item.url}`}
              url={item.url}
            />
          ))}
      </div>
    </>
  );
}

const PokemonData = ({ url }: { url: string }) => {
  const { data, isLoading } = useGetPokemonByUrl(url);

  const pokemonData = useMemo<IPokemonItem>(() => {
    if (!data) return { id: 0, name: '', image: '', isFavourite: false };

    const newData = data.data;
    return {
      id: newData.id,
      name: newData.name,
      image: newData.sprites.other.dream_world.front_default,
      isFavourite: false,
    };
  }, [data]);

  if (isLoading) return <Skeleton className="rounded-lg size-full" />;

  return <PokemonCard item={pokemonData} />;
};
