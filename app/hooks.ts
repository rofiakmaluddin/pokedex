import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { IGetAllPokemonResp, IGetPokemonByIdResp } from './types';
import { fetchAllPokemon, fetchPokemonByUrl } from './services';

export const useGetAllPokemon = () =>
  useQuery<AxiosResponse<IGetAllPokemonResp>, AxiosError<{ error: string }>>({
    queryKey: ['allPokemon'],
    queryFn: fetchAllPokemon,
  });

export const useGetPokemonByUrl = (url: string) =>
  useQuery<AxiosResponse<IGetPokemonByIdResp>, AxiosError<{ error: string }>>({
    queryKey: ['pokemonByUrl', url],
    queryFn: () => fetchPokemonByUrl(url),
  });
