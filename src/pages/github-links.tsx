import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const GithubLinks = () => {
  const links = [
    {
      id: 1,
      name: 'Bytedash3D',
      link: 'https://github.com/bytedash3d',
    },
    {
      id: 2,
      name: 'Powerset',
      link: 'https://github.com/powersetproject',
    },
  ];

  return (
    <Main
      meta={
        <Meta
          title="Dan0xe | Partner Github Links"
          description=" Here are some of my partners Github links."
        />
      }
    >
      <p>
        Here you can find some of my partners Github links. <br />
      </p>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.link} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default GithubLinks;
