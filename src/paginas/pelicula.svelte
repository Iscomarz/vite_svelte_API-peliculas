<script>
    import { onMount } from "svelte";
    export let params = {}
    let id = params.id
    const url = 'https://api.themoviedb.org/3/movie/'
    const key = '?api_key=1dcd79bd9f78c3748758154b83132b7e&language=es-MX'
    const urlFinal = url + id + key
    let pelicula = {}
    let generos = []
    var year = '';
    var rating;

    onMount(async () =>{
        const res = await fetch(urlFinal)
        pelicula = await res.json()
        generos = pelicula.genres
        year = pelicula.release_date
        year = year.substring(0,4)
        rating = pelicula.vote_average
        rating = rating.substring(0.2)
    })
</script>


<div class="flex items-center flex-row dark:bg-gray-800 w-full" style="height: 500px;">
    <img style="height: 400px; width: auto;" class="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://image.tmdb.org/t/p/w500{pelicula.poster_path}" alt="{pelicula.title}">
    <div class="flex flex-col justify-between p-4 leading-normal gap-4">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pelicula.title}</h5>
        <p class="dark:text-gray-400">{year}</p>
        <div class="rating">
            <p>Rating: {rating}</p>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{pelicula.overview}</p>
        <hr>
        <div class="flex flex-row gap-4">
        {#each generos as genero}       
            <p class="dark:text-white">{genero.name}</p>       
        {/each}
        </div>
    </div>
</div>

<style>
    .rating{
        display: flex;
        color: aliceblue;
        justify-content: center;
        width: 200px;
        border: solid 2px white;
        font-size: 1rem;
        font-weight: bolder;
    }
</style>
