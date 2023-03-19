import './Technologies.css';
import langs from '../../assets/langs.png';

export default function Technologies() {
  return (
    <div className='page-technologies'>
      <div className='technologies-info'>
        <h1>Technologies</h1>
        <h4>
          At our company, we utilize the most
          up-to-date technologies and industry
          standards to create exceptional
          products.
        </h4>
      </div>
      <img src={langs} alt='langs' />
    </div>
  );
}
