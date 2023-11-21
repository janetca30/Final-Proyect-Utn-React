import { Link } from 'react-router-dom'
import './Nav.css'

function Nav () {
  let navbarData = [
    { name: 'Home', to: '/' },
    { name: 'Recipes', to: '/recipes' },
    { name: 'Create your recipe', to: '/createRecipes' },

  ]
  return (
    <>
      <ul className='navbar'>
        {navbarData.map((navbar, key) => (
          <li className='navbar-item' key={key}>
            <Link to={navbar.to} >
              {navbar.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Nav;