'use client';

import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <nav className="min-h-[50px] bg-black text-white w-full flex items-center">
      <div className="container mx-auto flex items-center justify-between px-10">
        <div />
        <div
          onClick={() => router.push('/')}
          className="font-bold hover:scale-105 duration-150 w-max cursor-pointer text-lg sm:text-xl underline underline-offset-2"
        >
          Pokedex
        </div>
        <div
          onClick={() => router.push('/favorite')}
          className={cn(
            'cursor-pointer hover:scale-105 duration-150 font-semibold',
            pathName === '/favorite' && 'invisible'
          )}
        >
          Favorites
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
