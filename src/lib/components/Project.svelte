<script lang="ts">
  import Saos from 'saos';

  export let title: string;
  export let description: string;
  export let url: string;
  export let tools: Array<string>;
</script>

<Saos animation={'scale-in-center 0.3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
  <a href={url} class="project">
    <div class="project-info">
      <h2 class="project-title">{title}</h2>
      <p class="project-description">{description}</p>
    </div>
    <p class="tools">
      {#each tools as tool, i}
        {#if i == tools.length - 1}
          {`${tool}`}
        {:else}
          {`${tool}, `}
        {/if}
      {/each}
    </p>
  </a>
</Saos>

<style lang="scss">
  .project {
    padding: 10px;
    height: 195px;
    cursor: pointer;
    transition-duration: 500ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $darkgrey;
    border-radius: 8px;
    transition-duration: 0.5s;
    border: 1px solid black;
    text-decoration: none;

    &:hover {
      border: 1px solid $primary;
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
    color: $white;
  }

  .project-description {
    margin: 5px 0;
    font-family: 'Rubik';
    color: $lightgrey;
    text-align: center;
    width: 90%;
  }

  .tools {
    color: $white;
  }
</style>
