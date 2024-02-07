import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Components
import { Text } from '../shared/typography'
import { Icon } from '../shared/icons/Icons'
import { Flyout } from '../shared/flyout/Flyout'
import { Button } from '../shared/button/Button'
import { Avatar } from '../shared/avatar/Avatar'

// Styles
import classNames from 'classnames'
import * as styles from './header.module.css'
import * as sharedStyles from '../../sharedStyles.module.css'

export const Header = (): JSX.Element => {
  const imageUrl = new URL('assets/logo.png', import.meta.url)
  const [logoutFlyoutOpen, setLogoutFlyoutOpen] = useState(false)

  const toggleLogoutOpen = (): void => {
    setLogoutFlyoutOpen((bool) => !bool)
  }

  return (
    <div className={styles.header}>
      <Link to='/' className={styles.logo}>
        <img
          className={styles.img}
          src={imageUrl.toString()}
          alt='Parcel Starter App'
        />
      </Link>

      <nav aria-label='Main' id='main-nav' className={styles.nav}>
        <Link to='/' className={styles['logo-mobile']}>
          <img
            className={styles.img}
            src={imageUrl.toString()}
            alt='Parcel Starter App'
          />
        </Link>
        <button
          className={styles.profile}
          onClick={toggleLogoutOpen}
          aria-label='Sign Out'
        >
          <Text as='div' style='detail' color='dark-blue'>
            <div className={styles.avatar}>
              <Avatar initials={'PA'} size='sm' />
              Parcel App
            </div>
          </Text>
          <Icon
            style='icon-select-arrow'
            color='brand-red'
            size='sm'
            space='center'
            rotate={logoutFlyoutOpen}
          />
        </button>
        <div className={styles['account-wrapper']}>
          <Flyout
            type='account'
            isOpen={logoutFlyoutOpen}
            setIsOpen={setLogoutFlyoutOpen}
            width='lg'
          >
            <ul>
              <li key='item-1' className={sharedStyles['flyout-item']}>
                <Button
                  id='profile-flyout-btn'
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('handle logout')
                  }}
                >
                  <Icon
                    style='icon-sign-out'
                    color='brand-red'
                    size='md'
                    space='right'
                  />
                  <Text
                    as='span'
                    style='detail'
                    color='dark-blue'
                    weight='semibold'
                  >
                    Sign Out
                  </Text>
                </Button>
              </li>
            </ul>
          </Flyout>
        </div>

        <ul className={styles.menu}>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                classNames(styles.link, isActive ? styles.active : '')
              }
            >
              {({ isActive }) => (
                <Text
                  as='div'
                  style='nav-text'
                  color='black'
                  weight={isActive ? 'bold' : 'semibold'}
                >
                  Home
                </Text>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/ui-kit'
              className={({ isActive }) =>
                classNames(styles.link, isActive ? styles.active : '')
              }
            >
              {({ isActive }) => (
                <Text
                  as='div'
                  style='nav-text'
                  color='black'
                  weight={isActive ? 'bold' : 'semibold'}
                >
                  UI Kit
                </Text>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
