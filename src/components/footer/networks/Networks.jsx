
import { Link } from 'react-router-dom'
import facebook2 from './../../../assets/img/networks/facebook2.png';
import instagram2 from './../../../assets/img/networks/instagram2.png';
import linkedin2 from './../../../assets/img/networks/linkedin2.png';
import whatsapp2 from './../../../assets/img/networks/whatsapp2.png';
import youtube2 from './../../../assets/img/networks/youtube2.png';
import './Networks.css';

function Networks() {
  let networkData = [
    {
      to: 'https://www.facebook.com',
      name: 'Facebook',
      icon: facebook2,
    },
    {
      to: 'https://www.instagram.com',
      name: 'Instagram',
      icon: instagram2,
    },
    {
      to: 'https://www.linkedin.com',
      name: 'LinkedIn',
      icon: linkedin2,
    },
    { 
      to: 'https://api.whatsapp.com',
      name: 'WhatsApp',
      icon: whatsapp2,
    },
    {
      to: 'https://www.youtube.com',
      name: 'Youtube',
      icon: youtube2,
    },
  ];

  return (
    <ul className="network">
      {networkData.map((network, key) => (
        <li className="network-item" key={key}>
          <Link to={network.to} target='_blank' rel='noopener noreferrer'>
            <img src={network.icon} alt={network.name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Networks;
