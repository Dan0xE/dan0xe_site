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
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/ubervisor/',
    },
    {
      id: 3,
      name: 'Soundcloud',
      link: 'https://soundcloud.com/uberv',
    },
    {
      id: 4,
      name: 'Twitch',
      link: 'https://twitch.com/danisbored',
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
        Hello, i&apos;m Dan, I am a proficient Software Consultant and Reverse
        Engineer with a passion for continuous learning and developing
        innovative solutions. I have expertise in a diverse range of
        technologies, including React.js, TypeScript, GraphQL, Node.js, and
        Rust. <br />
        <br />
        In addition to my expertise in software engineering, I am also a
        producer of Electronic Dance Music. I kindly invite you to visit my
        Soundcloud profile. Moreover, I maintain an active presence within the
        online community by streaming on Twitch. I encourage you to explore my
        channel, where you can observe my technical skills and proficiency in
        real-time.
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
