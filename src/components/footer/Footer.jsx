import Networks from './networks/Networks';
import cardp from '../../assets/img/cardp.png'
import './Footer.css'

function Footer () {

  return (
    <footer>
      <Networks />
      <div className="copy">
        <img src={cardp}/>
        <p className="copiright">&copy; 2023 - Janet Calderon Acuña de Denis - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer;