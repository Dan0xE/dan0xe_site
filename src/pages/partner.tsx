import Link from 'next/link';
import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

import Alert from '../components/alert';
import Label from '../components/label';

const Partner = () => {
  const partnerList = [
    {
      id: 1,
      name: 'Learner.es',
      link: 'https://learner.es',
      description: 'A website to learn English made for Spanish speakers',
      tech: ['Education', 'Language', 'Students'],
    },
    {
      id: 2,
      name: 'Bytedash3D',
      link: 'https://bytedash3d.de',
      description: '3D Printing, made in Bavaria',
      tech: ['3D', 'Service', 'Printing'],
    },
    {
      id: 3,
      name: 'Powerset',
      link: 'http://powersetproject.com/',
      description: 'Developing addons for Flightsims',
      tech: ['Game-dev', 'Addons', 'Flightsims'],
    },
  ];

  return (
    <Main meta={<Meta title="Partner" description="Partner Projects" />}>
      <>
        <Alert style={'bg-blue-200'}>
          <p className="p-2">
            Most of these projects are not open source, but you can still visit
            their
            <Link href="/github-links"> Github </Link>
          </p>
        </Alert>
        <div className="border-t border-gray-300 py-4 text-center text-sm"></div>
      </>

      <>
        {partnerList.map((project) => (
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
              <p className="text-sm font-semibold">Keywords:</p>
              <div className="mt-2 flex flex-row flex-wrap space-x-4">
                {project.tech.map((tech) => (
                  <Label key={tech}>{tech}</Label>
                ))}
              </div>
            </ul>
            {partnerList.length !== project.id && (
              <div className="border-t border-gray-300 py-4 text-center text-sm"></div>
            )}
          </div>
        ))}
      </>
    </Main>
  );
};

export default Partner;
