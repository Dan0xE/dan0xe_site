import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com/Dan0xE',
    },
    {
      id: 2,
      name: 'Twitter',
      link: 'https://twitter.com/Dan0xE',
    },
    {
      id: 3,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ubervisor/',
    },
    {
      id: 4,
      name: 'Soundcloud',
      link: 'https://soundcloud.com/ubervisor',
    },
  ];

  return (
    <Main
      meta={
        <Meta
          title="Dan0xe | Fullstack Developer"
          description=" I am a fullstack developer with a passion for building web applications."
        />
      }
    >
      <p>
        Hello, I&apos;m Dan. I&apos;m a Software Consultant and Reverse Engineer
        who enjoys learning and making new stuff everyday and building a mod
        client called Nevouno. My favorite technologies right now are: React.js,
        Typescript, GraphQL, Node.js, and Rust. <br />
        I also produce EDM music so go checkout my Soundcloud! <br />
        <br /> Follow Me Online Here:
      </p>
      <ul>
        {socialLinks.map((link) => (
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

export default Index;
