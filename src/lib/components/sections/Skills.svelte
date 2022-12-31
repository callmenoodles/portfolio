<script lang="ts">
	import Skill from "../Skill.svelte";


  interface Skill {
    title: string;
    description?: string;
  }

  let skills: Array<Skill> = [
    {
      title: "Web Development",
      description: "I have years of experience building web applications using React, Express, and MongoDB.",
    },
    {
      title: "Software Engineering",
      description: "Designing the technical aspects of a program is an essential skill when building medium to large sized projects.",
    },
    {
      title: "Mobile Development",
      description: "I have experience developing mobile apps using Flutter and Dart.",
    }
  ]

  let subskills: Array<Skill> = [
    { title: "Git" },
    { title: "Linux" },
    { title: "Web Hosting" },
    { title: "Unity" },
    { title: "Game Development" },
    { title: "Git" },
    { title: "Linux" },
    { title: "Web Hosting" },
    { title: "Unity" },
    { title: "Game Development" },
    { title: "Git" },
    { title: "Linux" },
    { title: "Web Hosting" },
    { title: "Unity" },
    { title: "Game Development" },
    { title: "Git" },
    { title: "Linux" },
    { title: "Web Hosting" },
    { title: "Unity" },
    { title: "Game Development" },
  ]
</script>

<div class="skills">
  <div class="section-info">
    <h1 class="section-title">SKILLS</h1>
    <div class="section-underline"></div>
    <p class="section-description">
      I have a wide variety of skills backed by real-world experience and my eagerness to learn, to help you or your business.
    </p>
  </div>
  <div class="skill-container">
    {#each skills as skill, i}
      <Skill 
        title={skill.title}
        description={skill.description}
        isHead={i < 3} />
    {/each}
  </div>
  <div class="subskill-container">
    {#each subskills as skill}
      <Skill 
        title={skill.title}
        description={""}
        isHead={false} />
    {/each}
  </div>
</div>

<style lang="scss">
  .skills {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 250px;
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
      color: #959595;
      width: 500px;
      text-align: center;
    }
  }

  .skill-container {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    gap: 16px;
  }

  .subskill-container {
    width: 932px;
    display: flex;
    flex-wrap: wrap;
    gap: 16px; 
    margin-top: 16px;
  }

  .section-underline {
    width: 70px;
    height: 1px;
    background-color: #ffbb00;
    margin: 0 0 20px 0;
  }
</style>