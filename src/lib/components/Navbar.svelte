<script lang="ts">
  import { scrollTo } from 'svelte-scrolling';
  import { expoOut } from 'svelte/easing';
  const logo = "../../images/noodles.png";
</script>

<div class="navbar">
  <div class="navbar-inner">
    <a href="/">
      <img src={logo} alt="Noodles logo">
    </a>
  
    <nav>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a use:scrollTo={{ ref: 'skills', duration: 1000, offset: -100, easing: expoOut }}>SKILLS</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a use:scrollTo={{ ref: 'projects', duration: 1000, offset: -100, easing: expoOut }}>PROJECTS</a>
      <!-- svelte-ignore a11y-missing-attribute -->
      <a use:scrollTo={{ ref: 'contact', duration: 1000, offset: -100, easing: expoOut }}>CONTACT</a>
    </nav>
  </div>
</div>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100vw;
    position: absolute;
    z-index: 100;
  }

  .navbar-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
  }
  
  img {
    width: 35px;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      color: $white;
      margin: 0 8px;
      font-size: 1.1em;
      padding: 0 10px;
      border-left: 1px solid $black;
      border-right: 1px solid $black;
      transition-duration: 200ms;
      letter-spacing: 1px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      &:hover {
        color: $primary;
      }
    }
  }
</style>