import { useGetPokemonByUrl } from '@/app/hooks';
import { IPokemonItem } from '@/app/types';
import { usePokemonStore } from '@/stores/pokemon';
import { useEffect, useMemo } from 'react';
import { Skeleton } from '../ui/skeleton';
import PokemonCard from './PokemonCard';

const PokemonData = ({ url }: { url: string }) => {
  const { data, isLoading, refetch } = useGetPokemonByUrl(url);

  const { favoriteList } = usePokemonStore();

  useEffect(() => {
    refetch();
  }, [favoriteList]);

  const pokemonData = useMemo<IPokemonItem>(() => {
    if (!data) return { id: 0, name: '', image: '', isFavorite: false };

    const newData = data.data;
    return {
      id: newData.id,
      name: newData.name,
      image: newData.sprites.other.dream_world.front_default,
      isFavorite: !!favoriteList.filter((val) => val.id === newData.id).length,
    };
  }, [data]);

  if (isLoading) return <Skeleton className="rounded-lg size-full" />;

  return <PokemonCard item={pokemonData} />;
};

export default PokemonData;
