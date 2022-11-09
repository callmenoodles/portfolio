<script lang="ts">
  import Project from "$lib/components/Project.svelte";

  let desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio aspernatur iste repellendus nobis commodi voluptatem velit vero natus minima ea assumenda eos impedit autem sed aperiam, nam ipsa numquam sequi!";
</script>

<div class="contact-page">
  <div class="container">
    <h1 class="title">PROJECTS</h1>
    <div class="grid">
      <Project title="30 seconds to survive" description={desc} />
      <Project title="Noodles Translation" description={desc} />
      <Project title="Mag Ik Dit Delen?" description={desc} />
    </div>
  </div>
</div>

<style lang="scss">
  .contact-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .container {
    position: relative;
    top: 300px;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto;
    row-gap: 25px;
    column-gap: 25px;
    margin: 20px 0;
  }

  .title {
    margin: 0;
  }
</style>