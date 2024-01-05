<script>
    import Card from "./card.svelte";
    import { push } from 'svelte-spa-router'
    export let peliculas
</script>

<div class="grid grid-cols-3 gap-4">
{#each peliculas as peli}
    <div >
        <Card 
        titulo={peli.title}
        imagen={peli.poster_path}
        on:ver-mas={() => push('/Pelicula/'+ peli.id)}
        />
    </div>
{/each}
</div>

