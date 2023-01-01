<script lang="ts">
  export let title: string;
  export let description: string | undefined; 
  export let isHead: boolean = true;
</script>

<div class={`skill ${isHead ? "headskill" : "subskill"}`}>
  <div class="skill-info">
    <h2 class="skill-title">{title}</h2>
    {#if isHead}
    <p class="skill-description">{description}</p>
    {/if}
  </div>
</div>

<style lang="scss">
  .headskill {
    height: 180px;
    border: 1px solid #505050;
  }

  .subskill {
    height: 60px;
    font-size: 0.9em;
    flex: 1 1 auto;
    background-color: $darkgrey;
  }

  .skill {
    transition-duration: 500ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    .skill-info {
      padding: 28px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: auto;
    }
  }

  .skill-title {
    margin: 5px 0;
    font-family: 'Rubik';
    font-size: 1.2em;
  }

  .skill-description {
    margin: 5px 0;
    font-family: 'Rubik';
    color: $lightgrey;
    text-align: left;
  }
</style>