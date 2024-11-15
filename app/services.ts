import api from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { IGetAllPokemonResp, IGetPokemonByIdResp } from './types';

export const fetchAllPokemon = async (): Promise<
  AxiosResponse<IGetAllPokemonResp>
> => {
  return await api.get<IGetAllPokemonResp>('/v2/pokemon');
};

export const fetchPokemonByUrl = async (
  url: string
): Promise<AxiosResponse<IGetPokemonByIdResp>> => {
  return await api.get<IGetPokemonByIdResp>(url);
};
