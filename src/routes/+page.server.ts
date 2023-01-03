import { pb } from '../pocketbase';

/** @type {import('./$types').PageServerLoad} */
export const load = async () => {
  async function fetchProjects() {
    let res = await pb.collection('projects').getFullList();

    let projects: Array<Project> = res.map((project) => {
      return {
        name: project.name,
        description: project.description,
        url: project.url,
        tools: project.tools
      } as unknown as Project;
    });

    return projects;
  }

  async function fetchServices() {
    let res = await pb.collection('services').getFullList();

    let services: Array<Service> = res.map((service) => {
      return {
        name: service.name,
        description: service.description
      } as unknown as Service;
    });

    return services;
  }

  async function fetchSkills() {
    let res = await pb.collection('skills').getFullList();

    let skills: Array<Skill> = res.map((skill) => {
      return {
        name: skill.name,
        description: skill.description
      } as unknown as Skill;
    });

    return skills;
  }

  return {
    projects: fetchProjects(),
    services: fetchServices(),
    skills: fetchSkills()
  };
};
