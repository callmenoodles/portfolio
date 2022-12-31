<script lang="ts">
	import Project from "../Project.svelte";

  interface Project {
    title: string;
    description: string;
    tools: Array<string>;
  }

  let projects: Array<Project> = [
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project. Sample description for a project. Sample description for a project.", tools: ["React"] },
    { title: "Mag Ik Dit Delen?", description: "Sample description for a project.", tools: ["React"] },
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
      <Project
        title={project.title}
        description={project.description}
        tools={project.tools} />
    {/each}
  </div>
</div>

<style lang="scss">
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
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
    grid-row-start: 1;
    grid-row-end: 3;
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .section-title {
    margin-bottom: 0;
    padding: 4px;
  }

  .section-underline {
    width: 100px;
    height: 1px;
    background-color: #ffbb00;
    margin: 0 0 20px 0;
    margin-bottom: 50px;
  }
</style>