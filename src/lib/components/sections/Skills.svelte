<script lang="ts">
	import Skill from "../Skill.svelte";
  import Saos from "saos";
  import { pb } from '../../../pocketbase';
    import { onMount } from "svelte";

  interface Skill {
    title: string;
    description?: string;
  }

  let skills: Array<Skill> = [];
  let subskills: Array<Skill> = [];

  onMount(async () => {
    skills = await fetchSkills();
    subskills = await fetchSubskills();
  });

  async function fetchSkills() {
    let res = await pb.collection('skills').getFullList();

    let skills = res.map(skill => {
      return {
        name: skill.name,
        description: skill.description,
      } as unknown as Skill
    });

    return skills;
  }

  async function fetchSubskills() {
    let res = await pb.collection('subskills').getFullList();

    let subskills = res.map(subskill => {
      return {
        name: subskill.name,
        description: subskill.description,
      } as unknown as Skill
    });

    return subskills;
  }

</script>

<div class="skills">
  <div class="skills-container">
    <div class="section-info">
      <h1 class="section-title">SKILLS</h1>
      <div class="section-underline"></div>
      <p class="section-description">
        I have a wide variety of skills backed by real-world experience and my eagerness to learn, to help you or your business.
      </p>
    </div>
    <div class="skill-container">
      {#each skills as skill, i}
      {#if i == 0}
        <Saos animation={"slide-in-right 0.3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <Skill
            title={skill.name}
            description={skill.description}
            isHead={i < 3} />
        </Saos>
      {:else if i == 2}
        <Saos animation={"slide-in-left 0.3s cubic-bezier(0.35, 0.5, 0.65, 0.95) both"}>
          <Skill
            title={skill.name}
            description={skill.description}
            isHead={i < 3} />
        </Saos>
      {:else}
        <Skill
          title={skill.name}
          description={skill.description}
          isHead={i < 3} />
      {/if}
      {/each}
    </div>

    <div class="subskill-container">
      {#each subskills as skill}
        <Skill
          title={skill.name}
          description={""}
          isHead={false} />
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
    width: 70px;
    height: 1px;
    background-color: $primary;
    margin: 0 0 20px 0;
  }
</style>