<script lang="ts">
  import '../app.scss';
  import Navbar from '../lib/components/Navbar.svelte';
</script>

<svelte:head>
  <title>Noodles - Developer Portfolio</title>
</svelte:head>

<Navbar />

<slot />