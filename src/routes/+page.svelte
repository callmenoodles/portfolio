<script>
  import { scrollRef } from 'svelte-scrolling'
  import Footer from "$lib/components/sections/Footer.svelte";
  import Projects from "$lib/components/sections/Projects.svelte";
	import Skills from "$lib/components/sections/Skills.svelte";
  import Header from "../lib/components/sections/Header.svelte";
    import Navbar from '$lib/components/Navbar.svelte';
</script>

<div>
  <Navbar />
  
  <div class="section sec-header" use:scrollRef={'header'}>
    <Header />
  </div>
  <div class="section" use:scrollRef={'skills'}>
    <Skills />
  </div>
  <div class="section" use:scrollRef={'projects'}>
    <Projects />
  </div>
  <div class="section" use:scrollRef={'contact'}>
    <Footer />
  </div>
</div>

<style lang="scss">
  .section {
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .sec-header {
    height: 100vh;

    @media screen and (max-width: 1000px) {
      display: flex;
      justify-content: center;
    }

    @media screen and (max-width: 700px) {
      align-items: flex-start;
    }
  }
</style>