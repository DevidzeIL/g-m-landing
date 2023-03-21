import './Team.css';

function Member({ members }) {
  return (
    <>
      {members.map((item, index) => (
        <div className='member' key={index}>
          <div className='member-name'>{item.name}</div>
          <div className='member-role'>{item.role}</div>
        </div>
      ))}
    </>
  );
}

const members = [
  { name: 'Mary Sargsyan', role: 'CEO / Full-stack developer /Designer' },
  { name: 'Iliya Devidze', role: 'Full-stack developer Designer' },
  { name: 'Aleksandr Zakalsky', role: 'Full-stack developer' },
  { name: 'Vlad Gladky', role: 'Mobile developer' },
  { name: 'Ivan Timoshov', role: 'Mobile developer' },
  { name: 'Nikita Bondarev', role: 'Mobile developer' },
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
