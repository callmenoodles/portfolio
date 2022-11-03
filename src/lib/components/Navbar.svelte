<script lang="ts">
  const logo = "../../images/noodles.png";
</script>

<div class="navbar">
  <div class="navbar-inner">
    <img src={logo} alt="Noodles logo">
  
    <nav>
      <a href="/about">ABOUT</a>
      <a href="/projects">PROJECTS</a>
      <a href="/contact">CONTACT</a>
    </nav>
  </div>
</div>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 100vw;
    position: fixed;
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
    a {
      text-decoration: none;
      color: #ffffff;
      margin: 0 8px;
      font-size: 1.1em;
      padding: 0 10px;
      border-left: 1px solid #000000;
      border-right: 1px solid #000000;
      transition-duration: 200ms;
      letter-spacing: 1px;

      &:hover {
        transition-duration: 200ms;
        border-left: 1px solid #ffbb00;
        border-right: 1px solid #ffbb00;
      }
    }
  }
</style>