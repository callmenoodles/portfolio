<script lang="ts">
  import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte';
  import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte'
  import TypedJs from '@loscrackitos/svelte-typed-js';

  let titles = [
    "WEBSITES",
    "WEB APPS",
    "VIDEO GAMES",
    "MOBILE APPS"
  ]
</script>

<div class="header">
  <p class="text-intro">I GO BY NOODLES AND I CREATE</p>
  <div class="typedjs-container">
    <TypedJs strings={titles} loop=true typeSpeed={50} backSpeed={40} cursorChar='' backDelay={900}>
      <!-- svelte-ignore a11y-missing-content -->
      <h1 class="text-title typing">{titles[0]}</h1>
    </TypedJs>
  </div>
  <p class="text-description">
    This website is mainly for showing my portfolio but I also want to use my skills to help businesses and people like you to create or update your website.
    <br><br>
    Interested? Have a look at my portfolio below and get in touch with me.
  </p>
  <div class="social">
    <div class="icon">
      <a href="https://www.linkedin.com/in/callmenoodles/">
        <IoLogoLinkedin />
      </a>
    </div>
    <div class="icon">
      <a href="https://github.com/callmenoodles">
        <IoLogoGithub />
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  .header {
    display: flex;
    flex-direction: column;
    width: 500px;
    position: relative;
    left: 20vw;

    @media screen and (max-width: 1000px) {
      position: initial;
    }

    @media screen and (max-width: 700px) {
      left: 0;
      width: 75%;
      position: relative;
      top: 30vh;
    }
  }

  .text-intro {
    margin: 0;
    color: #707070;
    font-size: 1.2em;
    font-family: 'Rubik';

    @media screen and (max-width: 1000px) {
      font-size: 1.1em;
    }

    @media screen and (max-width: 700px) {
      // font-size: 1.0em;
    }
  }

  .text-title {
    margin: 0;
    font-size: 5em;
    font-weight: bold;
    line-height: 100px;
    position: relative;
    left: -4px;
    white-space: nowrap;

    @media screen and (max-width: 1000px) {
      font-size: 4em;
      line-height: 80px;
    }

    @media screen and (max-width: 700px) {
      font-size: 2.8em;
      line-height: 60px;
      left: -1px;
    }
  }

  .text-description {
    margin: 0 0;
    font-size: 1.2em;
    color: $lightgrey;
    width: 100%;
    font-family: 'Rubik';

    @media screen and (max-width: 1000px) {
      font-size: 1.1em;
    }

    @media screen and (max-width: 700px) {
      // font-size: 1.0em;
    }
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

    @media screen and (max-width: 1000px) {
      height: 80px;
    }

    @media screen and (max-width: 700px) {
      height: 60px;
    }
  }

  a {
    text-decoration: none;
    color: $white;
    transition-duration: 200ms;

    &:hover {
      transition-duration: 200ms;
      color: $primary;
    }
  }
</style>