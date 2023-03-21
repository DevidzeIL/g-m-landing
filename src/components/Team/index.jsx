import { useState } from 'react';
import './Team.css';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';

function Member({ members }) {
  const [hoveredMemberIndex, setHoveredMemberIndex] = useState(-1);

  return (
    <>
      {members.map((item, index) => (
        <div
          className={`member ${hoveredMemberIndex === index ? 'hovered' : ''}`}
          key={index}
          onMouseEnter={() => setHoveredMemberIndex(index)}
          onMouseLeave={() => setHoveredMemberIndex(-1)}
        >
          {hoveredMemberIndex === index ? (
            <>
              <div className='member-header'>
                <div className='member-name'>{item.name}</div>
                <div className='member-role'>{item.info}</div>
              </div>
              <div className='member-links'>
                {item.links.map((link, index) => (
                  <>
                    <div key={index}>
                      <a href={link.link}>
                        <img src={link.icon} alt={link.name} />
                      </a>
                    </div>
                  </>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className='member-name'>{item.name}</div>
              <div className='member-role'>{item.role}</div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

const members = [
  {
    name: 'Mary Sargsyan',
    role: 'CEO / Full-stack developer /Designer',
    info: 'info',
    links: [
      { name: 'github', link: 'https://github.com/', icon: github },
      { name: 'linkedin', link: 'https://www.linkedin.com/', icon: linkedin },
    ],
  },
  {
    name: 'Iliya Devidze',
    role: 'Full-stack developer Designer',
    info: 'info',
    links: [
      { name: 'github', link: 'https://github.com/', icon: github },
      { name: 'linkedin', link: 'https://www.linkedin.com/', icon: linkedin },
    ],
  },
  {
    name: 'Aleksandr Zakalsky',
    role: 'Full-stack developer',
    info: 'info',
    links: [
      { name: 'github', link: 'https://github.com/', icon: github },
      { name: 'linkedin', link: 'https://www.linkedin.com/', icon: linkedin },
    ],
  },
  {
    name: 'Vlad Gladky',
    role: 'Mobile developer',
    info: 'info',
    links: [
      { name: 'github', link: 'https://github.com/', icon: github },
      { name: 'linkedin', link: 'https://www.linkedin.com/', icon: linkedin },
    ],
  },
  {
    name: 'Ivan Timoshov',
    role: 'Mobile developer',
    info: 'info',
    links: [
      { name: 'github', link: 'https://github.com/', icon: github },
      { name: 'linkedin', link: 'https://www.linkedin.com/', icon: linkedin },
    ],
  },
  {
    name: 'Nikita Bondarev',
    role: 'Mobile developer',
    info: 'info',
    links: [
      { name: 'github', link: 'https://github.com/', icon: github },
      { name: 'linkedin', link: 'https://www.linkedin.com/', icon: linkedin },
    ],
  },
];

export default function Team() {
  return (
    <div className='page-team' id='team'>
      <div className='team-body'>
        <div className='team-title'>
          <h1>Meet our team!</h1>
          <h3>
            Our team is composed of experienced developers and designers who are passionate about
            building robust and scalable software solutions.
          </h3>
        </div>
        <Member members={members} />
      </div>
    </div>
  );
}
