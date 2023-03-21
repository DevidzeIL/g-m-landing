import './Services.css';
import bug from '../../assets/icons/bug.svg';
import code from '../../assets/icons/code.svg';
import layout from '../../assets/icons/layout.svg';
import mobile from '../../assets/icons/mobile.svg';

const services_left = [
  {
    icon: layout,
    title: 'UX/UI Design',
    body: 'We create visually appealing and intuitive designs that provide a seamless user experience',
  },
  {
    icon: code,
    title: 'Web Development',
    body: 'We cover both iOS and Android platforms, using modern tools to develop high-quality applications.',
  },
];

const services_bottom = [
  {
    icon: bug,
    title: 'Testing Services',
    body: 'Our software meet the highest quality standards using manual, automated, and performance testing methodologies',
  },
  {
    icon: mobile,
    title: 'Mobile Development',
    body: 'Our software meet the highest quality standards using manual, automated, and performance testing methodologies',
  },
];

function Service({ services }) {
  return (
    <>
      {services.map((item, index) => (
        <div className='service' key={index}>
          <div className='service-icon'>
            <img src={item.icon} alt={item.title} />
          </div>
          <div className='service-title'>{item.title}</div>
          <div className='service-body'>{item.body}</div>
        </div>
      ))}
      <></>
    </>
  );
}

export default function Services() {
  return (
    <div className='page-services' id='services'>
      <div className='services-header'>
        <div className='services-title'>
          <h1>Our Services</h1>
          <h3>At our company, we offer a range of services to meet the needs of our clients.</h3>
        </div>
        <div className='services-left'>
          <Service services={services_left} />
        </div>
      </div>
      <div className='services-body'>
        <Service services={services_bottom} />
      </div>
    </div>
  );
}
