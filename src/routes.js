import Inicio from "./paginas/inicio.svelte";
import Pelicula from "./paginas/pelicula.svelte";
import Error404 from "./paginas/errorPage.svelte";

const routes= {
    '/': Inicio,
    '/Pelicula/:id': Pelicula,
    '*':Error404
}

export default routes;