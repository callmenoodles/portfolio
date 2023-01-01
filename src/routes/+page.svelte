<script>
  import { scrollRef } from 'svelte-scrolling'
  import Footer from "$lib/components/sections/Footer.svelte";
  import Projects from "$lib/components/sections/Projects.svelte";
	import Skills from "$lib/components/sections/Skills.svelte";
  import Header from "../lib/components/sections/Header.svelte";
</script>

<div>
  <div class="section header" use:scrollRef={'header'}>
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

  .header {
    height: 100vh;
  }
</style>