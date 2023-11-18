import bar from './../../assets/img/bar.jpg'
//import Bond from './bond/Bond'
import './Section.css'


function Section() {
  return (
    <section>
      <div className='image-bar'>
        <img src={bar} alt='bar' />
        
        <p className='presentation'>Welcome to Janet&apos;s Cocktails. If you&apos;re looking for information or recipes for exquisite whiskeys, award-winning gins or other world-class spirits, you&apos;re in the right place.<br></br>Drink responsibly.</p>
      </div>
    </section>
      )
}

      export default Section;