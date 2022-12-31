<script lang="ts">
  export let title: string;
  export let description: string; 
  export let tools: Array<string>;
</script>

<div class="project">
  <div class="project-info">
    <h2 class="project-title">{title}</h2>
    <p class="project-description">{description}</p>
  </div>
  <p class="tools">
    {#each tools as tool, i}
      {`${tool}`}
    {/each}
  </p>
</div>

<style lang="scss">
  .project {
    padding: 15px;
    width: 320px;
    height: 195px;
    cursor: pointer;
    transition-duration: 500ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #101010;
    border-radius: 8px;
    transition-duration: 0.5s;
    border: 1px solid black;

    &:hover {
      border: 1px solid #ffbb00;
      transition-duration: 200ms;
    }

    .project-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: auto;
    }
  }

  .project-title {
    margin: 5px 0;
    font-family: 'Rubik';
  }

  .project-description {
    margin: 5px 0;
    font-family: 'Rubik';
    color: #959595;
    text-align: center;
  }
</style>