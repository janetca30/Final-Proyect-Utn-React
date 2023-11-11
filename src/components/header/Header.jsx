import cocktail from './../../assets/img/cocktail.png'
import Nav from './nav/Nav';
import './Header.css'

function Header () {
  return (
    <header className='header'>
      <div className="title">
        <img src={cocktail} alt='cocktail'/>
        <h1 className="title-1">Janet&apos;s Cocktails</h1>
      </div>
      <Nav />
    </header>
  )
}

export default Header;