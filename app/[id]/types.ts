import { Abilities, IPokemonItem, Mfe, Type } from '../types';

export interface IPokemonDetail extends IPokemonItem {
  types: Type[];
  abilities: Abilities[];
  moves: Mfe[];
}
