
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className='layout'>
      <Header />
        <div className='content'>
          <Outlet />
        </div>
      <Footer />
    </div>
  )
}

export default Layout;
