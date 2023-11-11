
import './Networks.css';
import facebook2 from './../../../assets/img/facebook2.png';
import instagram2 from './../../../assets/img/instagram2.png';
import linkedin2 from './../../../assets/img/linkedin2.png';
import whatsapp2 from './../../../assets/img/whatsapp2.png';
import youtube2 from './../../../assets/img/youtube2.png';

function Networks() {
  let networkData = [
    {
      name: 'Facebook',
      icon: facebook2,
    },
    {
      name: 'Instagram',
      icon: instagram2,
    },
    {
      name: 'LinkedIn',
      icon: linkedin2,
    },
    {
      name: 'WhatsApp',
      icon: whatsapp2,
    },
    {
      name: 'Youtube',
      icon: youtube2,
    },
  ];

  return (
    <ul className="network">
      {networkData.map((network, key) => (
        <li className="network-item" key={key}>
          <img src={network.icon} alt={network.name} />
        </li>
      ))}
    </ul>
  );
}

export default Networks;
