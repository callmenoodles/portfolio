<script>
  import Footer from '$lib/components/sections/Footer.svelte';
  import Projects from '$lib/components/sections/Projects.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Header from '../lib/components/sections/Header.svelte';
  import Navbar from '$lib/components/Navbar.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  const { projects, services, skills } = data;
</script>

<div>
  <Navbar />

  <div class="section sec-header">
    <Header />
  </div>
  <div class="section" id="sec-services">
    <Services {services} {skills} />
  </div>
  <div class="section" id="sec-projects">
    <Projects {projects} />
  </div>
  <div class="section">
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
  }
</style>
