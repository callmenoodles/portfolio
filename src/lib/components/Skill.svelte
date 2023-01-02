<script lang="ts">
  export let title: string;
</script>

<div class="skill">
  <div class="skill-info">
    <h2 class="skill-title">{title}</h2>
  </div>
</div>

<style lang="scss">
  .skill {
    transition-duration: 500ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    height: 60px;
    font-size: 0.9em;
    flex: 1 1 auto;
    align-items: center;
    background-color: $darkgrey;

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
    text-align: center;
  }

  .skill-description {
    margin: 5px 0;
    font-family: 'Rubik';
    color: $lightgrey;
    text-align: left;
  }
</style>
