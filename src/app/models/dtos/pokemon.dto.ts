import { Pokemon } from './../entities/pokemon.entity';

export class PokemonDto {
    id: number;
    name: string;
    types: string[];
    imageUrl: string;

    constructor(pokemon: Pokemon) {
        this.id = pokemon.id;
        this.name = pokemon.name;
        this.types = pokemon.types.map(t => t.type.name);
        this.imageUrl = pokemon.sprites.front_default
    }
}