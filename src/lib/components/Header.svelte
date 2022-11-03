<script lang="ts">
  import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte';
  import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'
  import TypedJs from '@loscrackitos/svelte-typed-js';

  let titles = [
    "WEBSITES",
    "VIDEO GAMES",
    "MOBILE APPS",
    "DESIGNS"
  ]
</script>

<div class="header">
  <p class="text-intro">I GO BY NOODLES AND I CREATE</p>
  <div class="typedjs-container">
    <TypedJs strings={titles} loop=true typeSpeed={50} backSpeed={40} cursorChar='' backDelay={900}>
      <!-- svelte-ignore a11y-missing-content -->
      <h1 class="text-title typing"></h1>
    </TypedJs>
  </div>
  <p class="text-description">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis voluptatibus similique reiciendis veniam culpa iure porro, ipsam quae tempora doloribus libero eaque odio suscipit dolorem nostrum maxime voluptate molestias voluptatem.
  </p>
  <div class="social">
    <div class="icon">
      <IoLogoLinkedin />
    </div>
    <div class="icon">
      <IoLogoGithub />
    </div>
  </div>
</div>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    
    position: relative;
    left: 20vw;
    top: -50px;
  }

  .text-intro {
    margin: 0;
    color: #606060;
    font-size: 1.2em;
    position: relative;
    top: 5px;
  }

  .text-title {
    margin: 0;
    font-size: 5em;
    position: relative;
    left: -5px;
  }

  .text-description {
    margin: 5px 0;
    font-size: 1em;
    color: #606060;
    width: 500px;
  }

  .social {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 22px;
    margin-top: 16px;

    .icon {
      max-width: 30px;
    }
  }

  .typedjs-container {
    height: 100px;
  }
</style>