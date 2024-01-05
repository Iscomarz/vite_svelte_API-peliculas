<script>
    import Loading from "../componentes/loading.svelte";
    import GridCards from "../componentes/gridCards.svelte";
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=1dcd79bd9f78c3748758154b83132b7e&language=es-MX&page=1";

  let promesa = ajax();
  let peliculas = [];

  async function ajax() {
    const res = await fetch(url);
    peliculas = await res.json();

    if (res.ok) {
      return peliculas.results;
    } else {
      throw new Error("No se pudo conectar a la API");
    }
  }
</script>

<h1>Peliculas mas populares del momento</h1>

{#await promesa}
  <div class="content-center items-center"><Loading /></div>
{:then peliculas}
    <GridCards {peliculas}/>
{:catch error}
  <p style="color: red;">{error}</p>
{/await}
