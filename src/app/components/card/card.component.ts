import { Component, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDto } from '../../models/dtos/pokemon.dto';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrl: './card.component.css',
})
export class CardComponent implements OnInit, OnDestroy {
    data?: PokemonDto;
    isLoading = false;
    errorMessage = '';

    private searchSubject = new Subject<string>(); // Controle de debounce
    private destroy$ = new Subject<void>();

    constructor(private pokemonService: PokemonService) { }

    ngOnInit(): void {
        this.searchSubject
            .pipe(
              debounceTime(500), // Aguarda 500ms antes de continuar
              takeUntil(this.destroy$)) // Cancela o fluxo quando o componente for destruído
            .subscribe((name) => {
                this.getPokemon(name.trim() === '' ? 'pikachu' : name);
            });

        this.getPokemon('pikachu');
    }

    onSearch(name: string) {
        this.searchSubject.next(name);
    }

    getPokemon(name: string) {
        this.pokemonService.getPokemon(name).subscribe({
            next: (response) => {
                this.data = new PokemonDto(response);
                this.isLoading = false;
                this.errorMessage = '';
            },
            error: () => {
                this.data = undefined;
                this.isLoading = false;
                this.errorMessage = 'Pokémon não encontrado';
            },
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
