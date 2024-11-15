'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { useGetPokemonById } from './hooks';
import { IPokemonDetail } from './types';
import { usePokemonStore } from '@/stores/pokemon';

const Detail = () => {
  const { id } = useParams();

  const { data, isLoading, refetch } = useGetPokemonById(id as string);

  const { favoriteList, removeFromFavorite, saveToFavorite } =
    usePokemonStore();

  useEffect(() => {
    refetch();
  }, [favoriteList]);

  const item = useMemo<IPokemonDetail>(() => {
    if (!data)
      return {
        id: 0,
        name: '',
        image: '',
        isFavorite: false,
        abilities: [],
        types: [],
        moves: [],
      };

    const newData = data.data;

    return {
      id: newData.id,
      name: newData.name,
      image: newData.sprites.other.dream_world.front_default,
      isFavorite: !!favoriteList.filter((val) => val.id === newData.id).length,
      abilities: newData.abilities,
      types: newData.types,
      moves: newData.moves,
    };
  }, [data]);

  return (
    <div className="grid grid-cols-2 gap-5">
      <Card>
        <CardContent className="space-y-5 p-10 flex justify-center items-center">
          {isLoading ? (
            <Skeleton className="size-[550px]" />
          ) : (
            <div className="relative">
              {item.isFavorite ? (
                <BookmarkCheck
                  onClick={() => removeFromFavorite(item.id)}
                  className="absolute right-2 top-2 size-10 hover:scale-125 duration-200 cursor-pointer"
                />
              ) : (
                <Bookmark
                  onClick={() => saveToFavorite(item)}
                  className="absolute right-2 top-2 size-10 hover:scale-125 duration-200 cursor-pointer"
                />
              )}
              <Image
                src={item.image}
                width={550}
                height={550}
                alt={item.name}
                quality={80}
              />
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="space-y-5 p-10">
          <div className="font-semibold text-4xl capitalize">{item.name}</div>

          <AdditionalData
            title="Types"
            item={item.types.map((val) => val.type.name)}
          />

          <AdditionalData
            title="Abilities"
            item={item.abilities.map((val) => val.ability.name)}
          />

          <AdditionalData
            title="Moves"
            item={item.moves.map((val) => val.move.name)}
          />
        </CardContent>
      </Card>
    </div>
  );
};

const AdditionalData = ({ item, title }: { item: string[]; title: string }) => {
  return (
    <>
      <div className="font-semibold text-2xl capitalize mb-2">{title}</div>
      <div className="flex gap-2 flex-wrap">
        {item.map((val) => (
          <div className="bg-neutral-500 text-white px-3 py-1 rounded-full capitalize !w-max text-nowrap">
            {val}
          </div>
        ))}
      </div>
    </>
  );
};

export default Detail;
