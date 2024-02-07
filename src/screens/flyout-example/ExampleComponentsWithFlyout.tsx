// An example of the components required to build a flyout menu
import { useState } from 'react'
import { Button } from '../../components/shared/button/Button'
import { Icon } from '../../components/shared/icons/Icons'
import { Flyout } from '../../components/shared/flyout/Flyout'
import { Text } from '../../components/shared/typography'
import { Avatar } from '../../components/shared/avatar/Avatar'
import * as styles from '../flyout-example/flyout-examples.module.css'
import * as sharedStyles from '../../sharedStyles.module.css'

export const ExampleComponentsWithFlyout = (): JSX.Element => {
  // account menu
  const [accountFlyoutOpen, setAccountFlyoutOpen] = useState(false)
  const toggleAccountFlyout = (): void => {
    setAccountFlyoutOpen((bool) => !bool)
  }

  // default tile menu
  const [defaultFlyoutOpen, setDefaultFlyoutOpen] = useState(false)
  const toggleDefaultFlyout = (): void => {
    setDefaultFlyoutOpen((bool) => !bool)
  }

  // default contact menu
  const [contactFlyoutOpen, setContactFlyoutOpen] = useState(false)
  const toggleContactFlyout = (): void => {
    setContactFlyoutOpen((bool) => !bool)
  }

  // disabled contact menu
  const [disabledContactFlyoutOpen, setDisabledContactFlyoutOpen] =
    useState(false)
  const toggleDisabledContactFlyout = (): void => {
    setDisabledContactFlyoutOpen((bool) => !bool)
  }

  return (
    <>
      Account
      <br />
      <div className={styles.container}>
        <Button as='button' style='icon-only' onClick={toggleAccountFlyout}>
          <Text as='div' style='detail' color='dark-blue'>
            <div className={styles.avatar}>
              <Avatar initials='JD' size='sm' />
              Jane Doe
            </div>
          </Text>
          <Icon
            style='icon-select-arrow'
            color='brand-red'
            size='sm'
            space='center'
            rotate={accountFlyoutOpen}
          />
        </Button>
        <div className={styles['account-wrapper']}>
          <Flyout
            type='account'
            isOpen={accountFlyoutOpen}
            setIsOpen={setAccountFlyoutOpen}
            width='lg'
          >
            <ul>
              <li key='item-1'>
                <a href='/'>
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
                </a>
              </li>
            </ul>
          </Flyout>
        </div>
      </div>
      <br />
      <br />
      Default
      <br />
      <div className={styles.container}>
        <Button as='button' style='icon-only' onClick={toggleDefaultFlyout}>
          <Icon style='icon-menu' color='icon-default' size='xl' />
        </Button>
        <div className={styles['default-wrapper']}>
          <Flyout
            type='default'
            isOpen={defaultFlyoutOpen}
            setIsOpen={setDefaultFlyoutOpen}
            width='md'
          >
            <ul>
              <li key='item-1' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('trigger export list modal')
                  }}
                >
                  <Icon
                    style='icon-download'
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
                    Export List
                  </Text>
                </Button>
              </li>
              <li key='item-2' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('trigger delete list modal')
                  }}
                >
                  <Icon
                    style='icon-delete'
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
                    Delete List
                  </Text>
                </Button>
              </li>
            </ul>
          </Flyout>
        </div>
      </div>
      <br />
      <br />
      Contact (default)
      <br />
      <div className={styles.container}>
        <Button as='button' style='icon-only' onClick={toggleContactFlyout}>
          <Icon style='icon-menu' color='icon-default' size='xl' />
        </Button>
        <div className={styles['default-wrapper']}>
          <Flyout
            type='default'
            isOpen={contactFlyoutOpen}
            setIsOpen={setContactFlyoutOpen}
            width='lg'
          >
            <ul>
              <li key='item-1' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('trigger edit mode')
                  }}
                >
                  <Icon
                    style='icon-edit'
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
                    Edit Contact
                  </Text>
                </Button>
              </li>
              <li key='item-2' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('trigger DBA modal')
                  }}
                >
                  <Icon
                    style='icon-add-to-dba'
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
                    Add DBA
                  </Text>
                </Button>
              </li>
              <li key='item-3' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('trigger disqualify mutation')
                  }}
                >
                  <Icon
                    style='icon-disqualified'
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
                    Disqualify Contact
                  </Text>
                </Button>
              </li>
            </ul>
          </Flyout>
        </div>
      </div>
      <br />
      <br />
      Contact DBA disabled (default)
      <br />
      <div className={styles.container}>
        <Button
          as='button'
          style='icon-only'
          onClick={toggleDisabledContactFlyout}
        >
          <Icon style='icon-menu' color='icon-default' size='xl' />
        </Button>
        <div className={styles['default-wrapper']}>
          <Flyout
            type='default'
            isOpen={disabledContactFlyoutOpen}
            setIsOpen={setDisabledContactFlyoutOpen}
            width='lg'
          >
            <ul>
              <li key='item-1' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('trigger edit mode')
                  }}
                >
                  <Icon
                    style='icon-edit'
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
                    Edit Contact
                  </Text>
                </Button>
              </li>
              <li key='item-2' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  disabled
                  onClick={() => {
                    console.log('trigger DBA modal')
                  }}
                >
                  <Icon
                    style='icon-add-to-dba'
                    color='disabled-check'
                    size='md'
                    space='right'
                  />
                  <Text
                    as='div'
                    style='detail'
                    color='disabled-check'
                    weight='semibold'
                  >
                    Add DBA
                  </Text>
                </Button>
                <Text
                  as='span'
                  style='note'
                  color='disabled-check'
                  weight='semibold'
                >
                  This is a small description of the action.
                </Text>
              </li>
              <li key='item-3' className={sharedStyles['flyout-item']}>
                <Button
                  as='button'
                  style='icon-only'
                  onClick={() => {
                    console.log('trigger disqualify mutation')
                  }}
                >
                  <Icon
                    style='icon-disqualified'
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
                    Disqualify Contact
                  </Text>
                </Button>
              </li>
            </ul>
          </Flyout>
        </div>
      </div>
    </>
  )
}
