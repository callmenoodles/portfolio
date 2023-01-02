<script lang="ts">
  import { scrollTo } from 'svelte-scrolling';
  import { expoOut } from 'svelte/easing';
</script>

<div class="footer">
  <a class="btn-contact" href="mailto:support@noodles.services">INTERESTED?</a>
  <nav class="footer-nav">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a use:scrollTo={{ ref: 'header', duration: 1000, offset: -0, easing: expoOut }}>INTRO</a>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a use:scrollTo={{ ref: 'skills', duration: 1000, offset: -100, easing: expoOut }}>SKILLS</a>
    <!-- svelte-ignore a11y-missing-attribute -->
    <a use:scrollTo={{ ref: 'projects', duration: 1000, offset: -100, easing: expoOut }}>PROJECTS</a>
  </nav>
  <p class="footer-text">Developed by <a href="/" class="highlight">Noodles</a> with <a class="highlight-2" href="https://kit.svelte.dev/">SvelteKit</a>.</p>
</div>

<style lang="scss">
  .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }

  .btn-contact {
    padding: 10px 20px;
    border: 1px solid $primary;
    border-radius: 8px;
    background-color: $black;
    color: $primary;
    font-family: 'Rubik';
    font-size: 1.25em;
    letter-spacing: 3px;
    cursor: pointer;
    transition-duration: 200ms;  
    font-weight: normal;  
    text-decoration: none;

    &:hover {
      padding: 10px 24px;
      background-color: black;
      color: $white;
      border: 1px solid white;
      transition-duration: 200ms;
    }
  }

  .footer-nav {
    text-align: center;
    width: 500px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));

    @media screen and (max-width: 1000px) {
      width: 90%;
    }

    a:first-child {
      text-align: left;
    }

    a:last-child {
      text-align: right;
    }

    a {
      padding: 8px;
      text-decoration: none;
      color: $white;
      font-size: 1.2em;
      font-family: 'Rubik';
      font-weight: normal;
      transition-duration: 200ms;

      &:hover {
        color: $primary;
      }
    }
  }

  .highlight {
    color: $primary;
    text-decoration: underline;
  }

  .highlight-2 {
    transition-duration: 200ms;
    text-decoration: none;
    color: $white;

    &:hover {
      color: #ff531a;
      text-decoration: underline;
      transition-duration: 200ms;
    }
  }

  .footer-text {
    margin: 0 0 20px 0;
    font-family: 'Rubik';
    font-size: 1.1em;
    text-align: center;
  }
</style>