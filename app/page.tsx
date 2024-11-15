'use client';

import { useGetAllPokemon } from './hooks';
import { Skeleton } from '@/components/ui/skeleton';
import PokemonData from '@/components/card/PokemonData';

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
