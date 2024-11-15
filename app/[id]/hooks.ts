import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { IGetPokemonByIdResp } from '../types';
import { fetchPokemonById } from './service';

export const useGetPokemonById = (id: string) =>
  useQuery<AxiosResponse<IGetPokemonByIdResp>, AxiosError<{ error: string }>>({
    queryKey: ['pokemonById', id],
    queryFn: () => fetchPokemonById(id),
  });
