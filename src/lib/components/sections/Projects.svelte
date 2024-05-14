<script>
  import Project from '$lib/components/Project.svelte';
</script>

<div class="projects">
  <h1 class="section-title">PROJECTS</h1>
  <div class="section-underline" />
  <div class="project-container">
    <Project
      title="IndivUniek"
      description="Redesigned website for a psychologist/sexologist."
      url="noodles.services"
      tools={["React"]}
    />
    <Project
      title="Minite"
      description="Freelance platform tailored to students."
      url="noodles.services"
      tools={["React"]}
    />
    <Project
      title="Werkloopt"
      description="Consultancy website te help people feel healthy using therapy."
      url="noodles.services"
      tools={["React"]}
    />
    <Project
      title="Noodles Translation"
      description="Quick and accurate English and native Dutch translation and copywriting."
      url="noodles.services"
      tools={["React"]}
    />
    <Project
      title="Mag Ik Dit Delen?"
      description="Tool for quickly determining whether data sharing is GDPR compliant."
      url="noodles.services"
      tools={["React"]}
    />
    <Project
      title="Cadens"
      description="I worked on an educational tool for dentistry students."
      url="noodles.services"
      tools={["React"]}
    />
  </div>
</div>

<style lang="scss">
  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(1);
    }
  }

  .projects {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 250px;
  }

  .project-container {
    display: grid;
    gap: 16px;
    align-content: center;
    justify-content: center;

    @media screen and (max-width: 1250px) {
      width: 95%;
    }

    @media screen and (min-width: 1250px) {
      width: 1200px;
    }

    grid-template-columns: repeat(auto-fill, minmax(340px, 340px));
  }

  .section-title {
    margin-bottom: 0;
    padding: 4px;
  }

  .section-underline {
    width: 100px;
    height: 1px;
    background-color: $primary;
    margin: 1px 0 20px 0;
    margin-bottom: 50px;
  }
</style>
