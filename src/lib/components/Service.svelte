<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<div class="service">
  <div class="service-info">
    <h2 class="service-title">{title}</h2>
    <p class="service-description">{description}</p>
  </div>
</div>

<style lang="scss">
  .service {
    transition-duration: 500ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    height: 180px;
    border: 1px solid #505050;
    width: 100%;
    min-width: 300px;
    align-items: left;

    @media screen and (max-width: 1000px) and (min-width: 700px) {
      height: 150px;
    }

    .service-info {
      padding: 28px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: auto;
    }
  }

  .service-title {
    margin: 5px 0;
    font-family: 'Rubik';
    font-size: 1.2em;
    text-align: center;
  }

  .service-description {
    margin: 5px 0;
    font-family: 'Rubik';
    color: $lightgrey;
    text-align: left;
  }
</style>
