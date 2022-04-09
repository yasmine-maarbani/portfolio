import React from 'react';
import './Header.css';
import CTA from './CTA';
import me from '../../sources/me.jpeg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
      <header>
    <div className='container header_container'>
        <div className='container1'>
        {/* <h5>Hello I'm</h5> */}
        <h1>Hey I'm Yasmine</h1>
        <h5>Full Stack Developer</h5>
         <CTA />
         <HeaderSocials />
         </div>
    <div className='me'>
        <img src={me} alt="" />
    </div>    
    </div>
    <a href='#contact' className='scroll_down'>Scrol Down</a>
    </header>
  )
}

export default Header;