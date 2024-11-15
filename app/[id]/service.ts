import api from '@/lib/axios';
import { AxiosResponse } from 'axios';
import { IGetPokemonByIdResp } from '../types';

export const fetchPokemonById = async (
  id: string
): Promise<AxiosResponse<IGetPokemonByIdResp>> => {
  return await api.get<IGetPokemonByIdResp>(`/v2/pokemon/${id}`);
};
