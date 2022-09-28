import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Label from '../components/label';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: 'Saffron',
      link: 'https://saffronapp.co',
      description: 'A cooking app for the modern cook.',
      tech: ['React', 'Typescript', 'GraphQL', 'Node', 'PostgreSQL'],
    },
    {
      id: 2,
      name: 'QTF',
      link: 'https://qtf.app',
      description: 'A simple, easy to use, and free to use time tracking app.',
      tech: ['React', 'Typescript', 'GraphQL', 'Node', 'PostgreSQL'],
    },
  ];

  return (
    <Main
      meta={<Meta title="Projects" description="Projects i am working on" />}
    >
      {projectList.map((project) => (
        <div key={project.id}>
          <h2 className="underline">{project.name}</h2>
          <p>{project.description}</p>
          <ul>
            <p className="text-sm font-semibold">Techstack:</p>
            <div className=" flex flex-wrap space-x-4">
              {project.tech.map((tech) => (
                <Label key={tech}>{tech}</Label>
              ))}
            </div>
          </ul>
        </div>
      ))}
    </Main>
  );
};

export default Projects;
