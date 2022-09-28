import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const socialLinks = [
    {
      id: 1,
      name: 'Github',
      link: 'https://github.com',
      icon: 'github',
    },
    {
      id: 2,
      name: 'Twitter',
      link: '',
      icon: 'twitter',
    },
    {
      id: 3,
      name: 'LinkedIn',
      link: '',
      icon: 'linkedin',
    },
  ];

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <p>
        Hello, I&apos;m Dan. I&apos;m a Software Consultant who enjoys making
        programming videos on YouTube and building a cooking app called Saffron.
        My favorite technologies right now are: React.js, Typescript, GraphQL,
        Node.js, and PostgreSQL. <br />
        <br /> Follow Me Online Here:
      </p>
      <ul>
        {socialLinks.map((link) => (
          <li key={link.id}>
            <p onClick={() => window.open(link.link)}>
              {/* <i className={`fab fa-${link.icon}`}></i> */}
              {link.name}
            </p>
          </li>
        ))}
      </ul>
    </Main>
  );
};

export default Index;
