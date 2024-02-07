import { Heading, Text } from '../components/shared/typography'
import { Button } from '../components/shared/button/Button'
import { Avatar } from '../components/shared/avatar/Avatar'
import { Icon } from '../components/shared/icons/Icons'
import { ExampleComponentWithModal } from './modal-example/ExampleComponentWithModal'
import { Tooltip } from '../components/shared/tooltip/Tooltip'
import { Alert } from '../components/shared/alert/Alert'
import { ExampleComponentsWithFlyout } from './flyout-example/ExampleComponentsWithFlyout'
import { Container } from '../components/shared/container/Container'
import { SelectDropdown } from '../components/shared/select/SelectDropdown'
import { List } from '../components/shared/typography/List'

import * as sharedStyles from '../sharedStyles.module.css'
import classNames from 'classnames'

export function UIKit(): JSX.Element {
  const options1 = [
    { value: 'one', label: 'Option 1' },
    { value: 'two', label: 'Option 2' },
    { value: 'three', label: 'Option 3' },
    { value: 'four', label: 'Option 4' }
  ]

  const options2 = [
    { value: 'Starbucks', label: 'Starbucks' },
    { value: 'Dunkin Donuts', label: 'Dunkin Donuts' },
    { value: 'George Howell', label: 'George Howell' }
  ]

  return (
    <Container>
      <div className={classNames(sharedStyles.flex, sharedStyles['align-top'])}>
        <div style={{ paddingRight: '10rem' }}>
          <Heading as='div' level='one'>
            UI Kit
          </Heading>
          <br />
          <h2 id='typography'>Typography</h2>
          <br />
          <h3 id='headings'>Headings</h3>
          <br />
          <Heading as='div' level='one'>
            Heading 1
          </Heading>
          <Heading as='h2' level='two'>
            Heading 2
          </Heading>
          <Heading as='h3' level='three'>
            Modal Heading
          </Heading>
          <p id='nav-text'>Nav Text:</p>
          <br />
          <Text
            href='#'
            as='a'
            style='nav-text'
            color='black'
            weight='semibold'
          >
            Nav Item
          </Text>
          <br />
          <br />
          <p id='detail-text'>Detail Text:</p>
          <br />
          <Text as='div' style='detail' color='dark-blue'>
            <Avatar initials='JD' size='sm' />
            Jane Doe
          </Text>
          <br />
          <Text as='p' style='detail' color='dark-grey'>
            1244 Boylston Street, Suite 1200
            <br />
            Boston, MA 02164
          </Text>
          <br />
          <Text as='p' style='detail' color='dark-grey' weight='bold'>
            Detail Text Grey
          </Text>
          <br />
          <Text as='p' style='detail' color='bright-blue' weight='bold'>
            Detail Text Blue
          </Text>
          <br />
          <Text as='p' style='detail' color='text-green' weight='bold'>
            Detail Text Green
          </Text>
          <br />
          <Text as='p' style='detail' color='text-red' weight='bold'>
            Detail Text Red
          </Text>
          <br />
          <br />
          <p id='link-text'>Link Text:</p>
          <br />
          <Text
            href='#'
            as='a'
            style='link'
            color='bright-blue'
            weight='semibold'
          >
            Text Link Component
          </Text>
          <br />
          <br />
          <h2 id='buttons'>Buttons</h2>
          <br />
          <p id='primary-button'>Primary Button:</p>
          <br />
          <Button id='primary' style='primary' type='submit' as='button'>
            Submit
          </Button>
          <br />
          <br />
          <Button
            id='secondary'
            style='primary'
            type='submit'
            disabled
            as='button'
          >
            Submit Disabled
          </Button>
          <br />
          <br />
          <br />
          <p id='secondary-button'>Secondary Button: </p>
          <br />
          <Button id='click' as='button' type='submit' style='secondary'>
            <Icon style='icon-plus' color='brand-red' size='md' space='right' />
            Click Here
          </Button>
          <br />
          <br />
          <Button id='browse' as='button' type='submit' style='secondary'>
            Browse...
          </Button>
          <br />
          <br />
          <Button id='link' as='a' style='primary' href='#'>
            Link Button
          </Button>
          <br />
          <br />
          <br />
          <p id='function-button'>Function Button:</p>
          <br />
          <Button id='icon-plus' as='button' type='button' style='function'>
            <Icon style='icon-plus' color='black' size='lg' />
          </Button>
          <br />
          <br />
          <Button id='icon-menu' as='button' type='button' style='function'>
            <Icon style='icon-menu' color='black' size='lg' />
          </Button>
          <br />
          <br />
          <br />
          <p id='icon-only'>Icon Only Button:</p>
          <br />
          <Button
            as='button'
            style='icon-only'
            ariaLabel='Back To Previous Page'
            onClick={() => {
              console.log('icon only button clicked')
            }}
            id='icon-only-button'
          >
            <Icon style='icon-back' color='brand-red' size='lg' space='right' />
          </Button>
          <br />
          <h2 id='avatar'>Avatar</h2>
          <br />
          <br />
          <Avatar initials='SA' size='md' />
          <br />
          <br />
          <h2 id='icons'>Icons</h2>
          <br />
          <br />
          <Icon style='icon-yellow-leads' color='brand-red' size='md' />
          <Icon style='icon-warning' color='brand-red' size='md' />
          <Icon style='icon-view-only' color='brand-red' size='md' />
          <Icon style='icon-upload' color='brand-red' size='md' />
          <Icon style='icon-star-outlined' color='brand-red' size='md' />
          <Icon style='icon-star-filled' color='brand-red' size='md' />
          <Icon style='icon-sign-out' color='brand-red' size='md' />
          <Icon style='icon-select-arrow' color='brand-red' size='md' />
          <Icon style='icon-search' color='brand-red' size='md' />
          <Icon style='icon-saving' color='brand-red' size='md' />
          <Icon style='icon-saved' color='brand-red' size='md' />
          <Icon style='icon-plus' color='brand-red' size='md' />
          <Icon style='icon-people' color='brand-red' size='md' />
          <Icon style='icon-offline' color='brand-red' size='md' />
          <Icon style='icon-new-list' color='brand-red' size='md' />
          <Icon style='icon-menu' color='brand-red' size='md' />
          <Icon style='icon-marketplace-leads' color='brand-red' size='md' />
          <Icon style='icon-input-clear' color='brand-red' size='md' />
          <Icon style='icon-hot-leads' color='brand-red' size='md' />
          <Icon style='icon-edit' color='brand-red' size='md' />
          <Icon style='icon-download' color='brand-red' size='md' />
          <Icon style='icon-divisions' color='brand-red' size='md' />
          <Icon style='icon-disqualified' color='brand-red' size='md' />
          <Icon style='icon-delete' color='brand-red' size='md' />
          <Icon style='icon-company' color='brand-red' size='md' />
          <Icon style='icon-close' color='brand-red' size='md' />
          <Icon style='icon-chevron-left' color='brand-red' size='md' />
          <Icon style='icon-chevron-right' color='brand-red' size='md' />
          <Icon style='icon-chevron-up' color='brand-red' size='md' />
          <Icon style='icon-chevron-down' color='brand-red' size='md' />
          <Icon style='icon-back' color='brand-red' size='md' />
          <Icon style='icon-attachment' color='brand-red' size='md' />
          <Icon style='icon-alert' color='brand-red' size='md' />
          <Icon style='icon-add-to-dba' color='brand-red' size='md' />
          <Icon style='icon-add-to-active' color='brand-red' size='md' />
          <Icon style='icon-info' color='brand-red' size='md' />
          <Icon style='icon-check-outlined' color='brand-red' size='md' />
          <Icon style='icon-job-seeker' color='brand-red' size='md' />
          <Icon style='icon-copy' color='brand-red' size='md' />
          <br />
          <br />
          <h2 id='modal'>Modal/Dialog</h2>
          <br />
          <ExampleComponentWithModal />
          <br />
          <br />
          <h2 id='tooltip'>Tooltip</h2>
          <br />
          <div>
            Favorites Tooltip{' '}
            <Tooltip
              text='Add to My Favorites'
              tooltipId='tooltip-1'
              position='center'
              id='favorite-tooltip'
              onClick={() => {}}
            >
              <Icon
                style='icon-star-outlined'
                color='icon-favorite'
                size='lg'
              />
            </Tooltip>
          </div>
          <br />
          <br />
          <h2 id='alerts'>Alerts</h2>
          <br />
          <Alert type='error' id='demo-error'>
            There is a temporary problem connecting to the server. Please wait
            till the connection is reestablished before making changes.
          </Alert>
          <br />
          <Alert type='alert' id='demo-alert'>
            This is a warning about a potentially negative issue that might need{' '}
            <a href='/#' className={sharedStyles.hyperlink}>
              an action taken
            </a>{' '}
            but can be dismissed by the user.
          </Alert>
          <br />
          <Alert type='success' id='demo-success' dismissable>
            You’ve done something successful and this type of message can be
            dismissed.
          </Alert>
          <br />
          <Alert type='info' id='demo-info'>
            An informational message that conveys information that doesn’t
            represent a risk.
          </Alert>
          <br />
          <br />
          <h2 id='flyouts'>Flyout Menus</h2>
          <br />
          <ExampleComponentsWithFlyout />
          <br />
          <br />
          <br />
          <h2 id='select'>Custom Selects</h2>
          <>
            <br />
            <SelectDropdown
              label='Generic Dropdown Example'
              placeholder='Select:'
              options={options1}
              name='example'
            />
            <br />
            <br />
            <br />
            <SelectDropdown
              label='Coffee Place Search'
              options={options2}
              isSearchable
              placeholder='Enter name...'
              name='coffee'
            />
          </>
          <br />
          <br />
        </div>
        <div>
          <br />
          <List type='unordered'>
            <li>
              <Text
                as='a'
                href='#typography'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Typography
              </Text>
              <List type='unordered'>
                <li>
                  <Text
                    as='a'
                    href='#headings'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Headings
                  </Text>
                </li>
                <li>
                  <Text
                    as='a'
                    href='#nav-text'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Nav
                  </Text>
                </li>
                <li>
                  <Text
                    as='a'
                    href='#detail-text'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Detail
                  </Text>
                </li>
                <li>
                  <Text
                    as='a'
                    href='#link-text'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Link
                  </Text>
                </li>
              </List>
            </li>
            <li>
              <Text
                as='a'
                href='#buttons'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Buttons
              </Text>
              <List type='unordered'>
                <li>
                  <Text
                    as='a'
                    href='#primary-button'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Primary
                  </Text>
                </li>
                <li>
                  <Text
                    as='a'
                    href='#secondary-button'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Secondary
                  </Text>
                </li>
                <li>
                  <Text
                    as='a'
                    href='#function-button'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Function
                  </Text>
                </li>
                <li>
                  <Text
                    as='a'
                    href='#icon-only-button'
                    style='detail'
                    color='dark-grey'
                    weight='bold'
                  >
                    Icon Only
                  </Text>
                </li>
              </List>
            </li>
            <li>
              <Text
                as='a'
                href='#avatar'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Avatar
              </Text>
            </li>
            <li>
              <Text
                as='a'
                href='#icons'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Icons
              </Text>
            </li>
            <li>
              <Text
                as='a'
                href='#modal'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Modal/Dialog
              </Text>
            </li>
            <li>
              <Text
                as='a'
                href='#tooltip'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Tooltip
              </Text>
            </li>
            <li>
              <Text
                as='a'
                href='#alerts'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Alerts
              </Text>
            </li>
            <li>
              <Text
                as='a'
                href='#flyouts'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Flyouts
              </Text>
            </li>
            <li>
              <Text
                as='a'
                href='#select'
                style='detail'
                color='dark-grey'
                weight='bold'
              >
                Select
              </Text>
            </li>
          </List>
        </div>
      </div>
    </Container>
  )
}
