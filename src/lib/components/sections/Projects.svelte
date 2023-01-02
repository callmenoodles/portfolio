<script lang="ts">
	import Project from "../Project.svelte";
  import Saos from 'saos';

  interface Project {
    title: string;
    description: string;
    tools: Array<string>;
  }

  let projects: Array<Project> = [
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project. Sample description for a project. Sample description for a project.", tools: ["React"] },
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project.", tools: ["React", "Svelte"] },
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project.", tools: ["React"] },
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project.", tools: ["React"] },
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project.", tools: ["React"] },
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project.", tools: ["React"] }
  ]
</script>

<div class="projects">
  <h1 class="section-title">PROJECTS</h1>
  <div class="section-underline"></div>
  <div class="project-container">
    {#each projects as project}
      <Saos animation={"scale-in-center 0.3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
        <Project
          title={project.title}
          description={project.description}
          tools={project.tools} />
      </Saos>        
    {/each}
  </div>
</div>

<style lang="scss">
  @keyframes -global-scale-in-center {
    0% {
      transform: scale(0.75);
    }
    100% {
      transform: scale(1.0);
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
    
    grid-template-columns: repeat(auto-fill, minmax(360px, 360px));
  }

  .section-title {
    margin-bottom: 0;
    padding: 4px;
  }

  .section-underline {
    width: 100px;
    height: 1px;
    background-color: $primary;
    margin: 0 0 20px 0;
    margin-bottom: 50px;
  }
</style>