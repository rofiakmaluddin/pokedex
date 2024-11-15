'use client';

import { IPokemonItem } from '@/app/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BookmarkCheck, Bookmark } from 'lucide-react';

const PokemonCard = ({ item }: { item: IPokemonItem }) => {
  const router = useRouter();

  return (
    <Card className="hover:shadow-2xl">
      <CardContent className="flex flex-col justify-between h-full space-y-5 p-5">
        <div className="relative space-y-5">
          {item.isFavourite ? (
            <BookmarkCheck className="absolute right-2 top-2 size-7 hover:scale-125 duration-200 cursor-pointer" />
          ) : (
            <Bookmark className="absolute right-2 top-2 size-7 hover:scale-125 duration-200 cursor-pointer" />
          )}
          <Image
            src={item.image}
            width={300}
            height={300}
            alt={item.name}
            quality={80}
            loading="lazy"
            className="max-h-[300px]"
          />
          <div className="font-semibold capitalize text-xl">{item.name}</div>
        </div>

        <Button block onClick={() => router.push(`/${item.id}`)}>
          Lihat Detail
        </Button>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
