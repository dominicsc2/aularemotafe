import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import OutlineButton from '@clean/presentation/components/common/buttons/OutlineButton/OutlineButton'
import PrimaryButton from '@clean/presentation/components/common/buttons/PrimaryButton/PrimaryButton'
import FlexContainer from '@clean/presentation/components/common/flex/FlexContainer/FlexContainer'
import DropableModal from '@clean/presentation/components/common/hoc/modals/DropableModal/DropableModal'
import Sidebar from '@clean/presentation/components/embedded-layout/Sidebar/Sidebar'
import { PropsChild, ModalMenuOptions } from '@clean/presentation/ts/interfaces/app.interfaces'
import classes from './Navbar.module.scss'
import { studentProfileModalContent } from './contents/navbarContent'
import { Image } from '@clean/presentation/components/common'

const Navbar: React.FC<PropsChild> = props => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [openStudentProfileModal, setStudentProfileModal] = useState(false)
  const [showOffer, setShowOffer] = useState([classes.container, classes.move])
  const [closeOffer, setCloseOffer] = useState(false)

  const router = useRouter()

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [closeOffer])

  function handleClick(e: React.MouseEvent<HTMLButtonElement>, href: string) {
    e.preventDefault()
    router.push(href)
  }

  function handleScroll() {
    if (!closeOffer) {
      if (window.pageYOffset === 0) {
        setShowOffer([classes.container, classes.move])
      } else {
        setShowOffer([classes.container])
      }
    } else {
      window.removeEventListener('scroll', handleScroll)
    }
  }

  function handleCloseOffer() {
    setCloseOffer(true)
    setShowOffer([classes.container])
  }

  function renderNavBarContent() {
    if (
      router.pathname === '/' ||
      router.pathname === '/instructor' ||
      router.pathname === '/instructor-welcome' ||
      router.pathname === '/main'
    ) {
      return <section className={classes.content}>{props.children}</section>
    }
    return null
  }

  function displayModal() {
    if (openStudentProfileModal) {
      return (
        <DropableModal>
          <>
            {studentProfileModalContent.map((row: ModalMenuOptions, index) => (
              <Fragment key={index}>
                <FlexContainer additionalStyles="row">
                  <img src={row.image} alt={row.image} /> <p>{row.option}</p>
                </FlexContainer>
                {index === 0 || index === studentProfileModalContent.length - 2 ? <hr /> : null}
              </Fragment>
            ))}
          </>
        </DropableModal>
      )
    }
    return null
  }

  function renderNavContent() {
    if (loggedIn) {
      return (
        <>
          {/* <Link to='/notifications'>
            <img src="/img/bell.png" alt="notificaciones" />
          </Link>
          <Link to='/messages'>
            <img src="/img/message.png" alt="messages" />
          </Link> */}

          <div onMouseOver={() => setStudentProfileModal(true)} onMouseLeave={() => setStudentProfileModal(false)}>
            <img src="/img/3.png" alt="notificaciones" />
            {displayModal()}
          </div>
        </>
      )
    }
    return (
      <>
        <PrimaryButton
          dataTestId="signin-button"
          onClick={e => handleClick(e, '/accounts/login')}
          value="Iniciar Sesión"
        />
        <OutlineButton
          dataTestId="signup-button"
          onClick={e => handleClick(e, '/accounts/signup')}
          value="Registrarse"
        />
      </>
    )
  }

  return (
    <header>
      <div className={classes.offer} style={!closeOffer ? { display: 'flex' } : { display: 'none' }}>
        <p>
          ¡Los resultados del sorteo semanal ya están disponibles ! <span> Ver resultados</span>
        </p>
        <p onClick={handleCloseOffer}>&times;</p>
      </div>
      <div className={classes.header}>
        <div className={showOffer.join(' ')}>
          <div className={classes.menuWrap}>
            <div className={classes.sidebarShow}>
              <Sidebar />
            </div>
              <Image style="centered-img" src="/img/trilce.jpg" alt="Logo" size={60} additionalStyles="my-0" goToOnClick="/" />
          </div>

          <nav className={classes.nav}>
            <ul className={classes.menu}>{renderNavContent()}</ul>
          </nav>
        </div>
      </div>
      {renderNavBarContent()}
    </header>
  )
}

export default Navbar
