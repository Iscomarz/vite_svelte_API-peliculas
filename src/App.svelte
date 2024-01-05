<script>
  import Router from "svelte-spa-router";
  import Menu from "./componentes/menu.svelte";
  import routes from "./routes";

  //API KEY: 1dcd79bd9f78c3748758154b83132b7e
</script>

<Menu />

<div class="container">
  <Router {routes} />
</div>
