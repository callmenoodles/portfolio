<script lang="ts">
  import Skill from '../Skill.svelte';
  import Service from '../Service.svelte';
  import Saos from 'saos';

  interface Service {
    title: string;
    description: string;
  }

  interface Skill {
    title: string;
  }

  let services: Array<Service> = [];
  let skills: Array<Skill> = [];
</script>

<div class="skills">
  <div class="skills-container">
    <div class="section-info">
      <h1 class="section-title">SERVICES & SKILLS</h1>
      <div class="section-underline" />
      <p class="section-description">
        I have a wide variety of skills backed by real-world experience and my eagerness to learn,
        to help you or your business.
      </p>
    </div>
    <div class="skill-container">
      {#each services as service, i}
        {#if i == 0}
          <Saos animation={'slide-in-right 0.3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
            <Service title={service.title} description={service.description} />
          </Saos>
        {:else if i == 2}
          <Saos animation={'slide-in-left 0.3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
            <Service title={service.title} description={service.description} />
          </Saos>
        {:else}
          <Service title={service.title} description={service.description} />
        {/if}
      {/each}
    </div>

    <div class="subskill-container">
      {#each skills as skill}
        <Skill title={skill.title} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
  @keyframes -global-slide-in-left {
    0% {
      transform: translateX(100px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes -global-slide-in-right {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes -global-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .skills {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 250px;
  }

  .skills-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 935px;

    @media screen and (max-width: 1000px) {
      width: 90%;
    }
  }

  .section-info {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .section-title {
      margin-bottom: 4px;
    }

    .section-description {
      margin: 0;
      color: $lightgrey;
      width: 500px;
      text-align: center;

      @media screen and (max-width: 1000px) {
        width: 90%;
      }
    }
  }

  .skill-container {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    gap: 16px;
    width: 100%;

    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(1, minmax(300px, 1fr));
    }
  }

  .subskill-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
  }

  .section-underline {
    width: 100px;
    height: 1px;
    background-color: $primary;
    margin: 1px 0 20px 0;
  }
</style>
