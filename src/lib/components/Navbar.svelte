<script lang="ts">
  import { animateScroll } from 'svelte-scrollto-element';
  import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
  import { expoOut } from 'svelte/easing';
  import IoMdMenu from 'svelte-icons/io/IoMdMenu.svelte';
  import IoMdClose from 'svelte-icons/io/IoMdClose.svelte';
  import { afterUpdate, onMount } from 'svelte';
  const logo = '../../images/noodles.png';

  let isOpen = false;

  function toggleMenu() {
    if (isOpen) {
      isOpen = false;
    } else {
      isOpen = true;
    }
  }

  afterUpdate(() => {
    if (isOpen) {
      disableBodyScroll(document);
    } else {
      enableBodyScroll(document);
    }
  });
</script>

<div class="navbar">
  <div class="navbar-inner">
    <a href="/">
      <img src={logo} alt="Noodles logo" />
    </a>

    <nav class="navigation">
      <a
        on:click={() =>
          animateScroll.scrollTo({ element: '#sec-services', offset: -100, easing: expoOut })}
        >SERVICES</a
      >
      <a
        on:click={() =>
          animateScroll.scrollTo({ element: '#sec-projects', offset: -100, easing: expoOut })}
        >PROJECTS</a
      >
      <a on:click={() => animateScroll.scrollToBottom({ easing: expoOut })}>CONTACT</a>
    </nav>

    <div class="icon" on:click={toggleMenu}>
      {#if isOpen}
        <IoMdClose />
      {:else}
        <IoMdMenu />
      {/if}
    </div>
  </div>

  <div class={`overlay ${isOpen ? 'visible' : ''}`} id="overlay">
    <nav class="mobile-navigation">
      <a
        on:click={() => {
          toggleMenu();
          animateScroll.scrollToTop({
            easing: expoOut
          });
        }}
      >
        INTRO
      </a>
      <a
        on:click={() => {
          toggleMenu();
          animateScroll.scrollTo({
            element: '#sec-services',
            offset: -25,
            easing: expoOut
          });
        }}
      >
        SERVICES
      </a>
      <a
        on:click={() => {
          toggleMenu();
          animateScroll.scrollTo({
            element: '#sec-projects',
            offset: -25,
            easing: expoOut
          });
        }}
      >
        PROJECTS
      </a>
    </nav>
  </div>
</div>

<style lang="scss">
  .icon {
    color: $white;
    width: 32px;
    height: 32px;
    cursor: pointer;
    transition-duration: 200ms;
    z-index: 300;

    @media screen and (min-width: 600px) {
      display: none;
    }

    &:hover {
      color: $primary;
      transition-duration: 200ms;
    }
  }

  .overlay {
    background-color: $black;
    width: 100vw;
    position: fixed;
    z-index: 200;
    top: 0;
    opacity: 0;
    height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: height 0ms 300ms, opacity 300ms;
  }

  .visible {
    height: 100vh;
    opacity: 1;
    transition: height 0ms 0ms, opacity 300ms;
  }

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

  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px) {
      display: none;
    }

    a {
      text-decoration: none;
      color: $white;
      margin: 0 8px;
      font-size: 1.1em;
      padding: 0 10px;
      transition-duration: 200ms;
      letter-spacing: 1px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        color: $primary;
      }
    }
  }

  .mobile-navigation {
    @extend .navigation;
    display: initial;

    @media screen and (min-width: 600px) {
      display: none;
    }

    a {
      margin: 40px 0;
      font-size: 1.6em;
      padding: 20px;
    }
  }
</style>
