import './index.css';

const CONTACT_MAILTO = 'guysandmary@gmail.com';
const CONTACT_TEL = '+1 (747)-327-7247';

export default function Footer() {
  return (
    <footer className='page-footer'>
      <ul>
        <li>Contact us :</li>
        <li>
          <a href={`tel:${CONTACT_TEL}`}>{CONTACT_TEL}</a>
        </li>
        <li>
          <a href={`mailto:${CONTACT_MAILTO}`}>{CONTACT_MAILTO}</a>
        </li>
        <li className='footer-copyright'>Copyright © 2023 Guys&Mary. All rights reserved.</li>
      </ul>
    </footer>
  );
}
