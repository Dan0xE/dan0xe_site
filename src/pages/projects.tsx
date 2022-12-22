import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Alert from '../components/alert';
import Label from '../components/label';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: 'Nevouno (Currently Private)',
      link: '',
      description:
        'A Minecraft Client that lets you extract and modify Minecraft Snapshots as well as running them on a custom Hypervisor',
      tech: ['React', 'Typescript', 'Rust', 'C' /* 'PostgreSQL' */],
    },
    {
      id: 2,
      name: 'CraOff',
      link: 'https://github.com/Dan0xE/CraOff',
      description: 'A method to activate Office.',
      tech: ['C#', '.NET', 'Batch'],
    },
    {
      id: 3,
      name: 'Learner.es (Closed Source)',
      link: 'https://Learner.es',
      description: 'A website to learn English made for Spanish speakers',
      tech: ['PHP', 'MySQL', 'JavaScript'],
    },
    {
      id: 4,
      name: 'Danscodelab',
      link: 'https://danscodelab.com',
      description: 'A website for my old consulting company',
      tech: ['PHP', 'MySQL', 'JavaScript'],
    },
    {
      id: 5,
      name: 'Danscodelab Canary',
      link: 'https://canary.danscodelab.com',
      description: 'The new website for my old consulting company',
      tech: ['React', 'Typescript', 'PostgreSQL', 'NodeJS'],
    },
    {
      id: 6,
      name: 'Tauri Logger',
      link: 'https://github.com/Dan0xE/tauri-logger',
      description: 'A simple logger for Tauri',
      tech: ['Typescript', 'Rust'],
    },
    {
      id: 7,
      name: 'TDU2 Mod Manager (Closed Source)',
      link: '',
      description:
        'A mod manager for TDU2 with a planned integration of TDU World',
      tech: ['React', 'Typescript', 'Rust', 'PostgreSQL'],
    },
    {
      id: 8,
      name: 'STSL',
      link: 'https://github.com/Dan0xE/STSL',
      description: 'A small TCP client/server written in C++',
      tech: ['C++'],
    },
    {
      id: 9,
      name: 'TaskTracker',
      link: 'https://github.com/Dan0xE/TaskTracker',
      description: 'A simple but old task tracker written in React',
      tech: ['React', 'Typescript'],
    },
    {
      id: 10,
      name: 'CLI-Calculator',
      link: 'https://github.com/Dan0xE/cli-calculator/',
      description: 'A simple calculator written in 10 minutes in Python',
      tech: ['Python'],
    },
  ];

  const [show, setShow] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('dont_show_alert') === 'true') {
        setShow(false);
      }
    }
  }, []);

  return (
    <Main
      meta={<Meta title="Projects" description="Projects i am working on" />}
    >
      {show && (
        <>
          <Alert style={'bg-blue-200'}>
            <p className="p-2">
              These are projects I am working on, some are private and some are
              public.
              <br />
              If you want to see the source code of a project, please contact me
              on{' '}
              <a
                href="https://linkedin.com/in/ubervisor"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>{' '}
              or checkout my{' '}
              <a
                href="https://github.com/dan0xe"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              .
              <br />
              <br />
              Also please note that not all of my projects are listed here.
              <br />
              <a
                className="cursor-pointer"
                onClick={() => {
                  localStorage.setItem('dont_show_alert', 'true');
                  setShow(false);
                }}
              >
                Click here to hide
              </a>
            </p>
          </Alert>
          <div className="border-t border-gray-300 py-4 text-center text-sm"></div>
        </>
      )}
      <>
        {projectList.map((project) => (
          <div key={project.id} className="w-auto">
            <h2>
              <a
                className="text-slate-800 "
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </a>
            </h2>
            <p>{project.description}</p>
            <ul>
              <p className="text-sm font-semibold">Techstack:</p>
              <div className="mt-2 flex flex-row flex-wrap space-x-4">
                {project.tech.map((tech) => (
                  <Label key={tech}>{tech}</Label>
                ))}
              </div>
            </ul>
            {projectList.length !== project.id && (
              <div className="border-t border-gray-300 py-4 text-center text-sm"></div>
            )}
          </div>
        ))}
      </>
    </Main>
  );
};

export default Projects;
