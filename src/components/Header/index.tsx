import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './styles'

import logoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  useEffect(()=>{ const linksNavbar = document.querySelectorAll('#navbarContainer>a');
    const pagePath = window.location.pathname;

    document.querySelector('.currentPageActive')?.classList.remove('currentPageActive');

    if (pagePath === '/ignite-timer' || pagePath === '/ignite-timer/') {
      linksNavbar[0].classList.add('currentPageActive');
      return;
    }

    linksNavbar[1].classList.add('currentPageActive');
  })

  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />

      <nav id='navbarContainer'>
        <NavLink to="/ignite-timer" >
          <Timer size={24} />
        </NavLink>

        <NavLink to="/ignite-timer/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
