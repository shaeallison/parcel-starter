import { Heading, Text } from '../components/shared/typography'
import { Button } from '../components/shared/button/Button'
import { Avatar } from '../components/shared/avatar/Avatar'
import * as sharedStyles from '../sharedStyles.module.css'
import { Icon } from '../components/shared/icons/Icons'
import { ExampleComponentWithModal } from './modal-example/ExampleComponentWithModal'
import { Tooltip } from '../components/shared/tooltip/Tooltip'
import { Alert } from '../components/shared/alert/Alert'
import { ExampleComponentsWithFlyout } from './flyout-example/ExampleComponentsWithFlyout'
import { Container } from '../components/shared/container/Container'
import { SelectDropdown } from '../components/shared/select/SelectDropdown'

export function UIKit(): JSX.Element {
  const options1 = [
    { value: 'one', label: 'Option 1' },
    { value: 'two', label: 'Option 2' },
    { value: 'three', label: 'Option 3' },
    { value: 'four', label: 'Option 4' }
  ]

  const options2 = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'horse', label: 'Horse' }
  ]

  const options3 = [
    { value: 'Starbucks', label: 'Starbucks' },
    { value: 'Dunkin Donuts', label: 'Dunkin Donuts' },
    { value: 'George Howell', label: 'George Howell' }
  ]

  const options4 = [
    { value: 'Harry Potter', label: 'Harry Potter' },
    { value: 'Ron Weasley', label: 'Ron Weasley' },
    { value: 'Hermione Granger', label: 'Hermione Granger' },
    { value: 'Draco Malfoy', label: 'Draco Malfoy' }
  ]

  return (
    <Container>
      <Heading as='div' level='one'>
        UI Kit
      </Heading>
      <hr />
      <h2>Typography</h2>
      <br />
      <h3>Headings</h3>
      <br />
      <Heading as='div' level='one'>
        My Lists (Heading 1)
      </Heading>
      <Heading as='h2' level='two'>
        My People’s Lists (Heading 2)
      </Heading>
      <Heading as='h3' level='three'>
        Modal Heading
      </Heading>
      <hr />
      <p>Nav Text:</p>
      <br />
      <Text href='#' as='a' style='nav-text' color='black' weight='semibold'>
        Directory
      </Text>
      <br />
      <hr />
      <br />
      <p>Detail Text: consolidated</p>
      <br />
      <Text as='div' style='detail' color='dark-blue'>
        <Avatar initials='JD' size='sm' />
        Jane Doe
      </Text>
      <br />
      <Text as='p' style='detail' color='dark-blue'>
        42 companies 625 contacts
      </Text>
      <br />
      <Text as='p' style='detail' color='dark-blue'>
        Saved
      </Text>
      <br />
      <Text as='p' style='detail' color='dark-grey'>
        1244 Boylston Street, Suite 1200
        <br />
        Boston, MA 02164
      </Text>
      <br />
      <Text as='p' style='detail' color='dark-grey' weight='bold'>
        8 Contacts
      </Text>
      <br />
      <Text as='p' style='detail' color='bright-blue' weight='bold'>
        Active Contacts (8)
      </Text>
      <br />
      <Text as='p' style='detail' color='text-green' weight='bold'>
        DBA Contacts (8)
      </Text>
      <br />
      <Text as='p' style='detail' color='text-red' weight='bold'>
        Disqualified Contacts (5)
      </Text>
      <br />
      <hr />
      <br />
      <Text href='#' as='a' style='link' color='bright-blue' weight='semibold'>
        Company
      </Text>
      <br />
      <hr />
      <br />
      <h2>Buttons</h2>
      <br />
      <p>Primary Button:</p>
      <br />
      <Button id='primary' style='primary' type='submit' as='button'>
        Submit
      </Button>
      <br />
      <br />
      <Button id='secondary' style='primary' type='submit' disabled as='button'>
        Submit Disabled
      </Button>
      <br />
      <br />
      <br />
      <p>Secondary Button: consolidated w/ upload</p>
      <br />
      <Button id='contact' as='button' type='submit' style='secondary'>
        <Icon style='icon-plus' color='brand-red' size='md' space='right' /> Add
        Contact
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
      <p>Function Button:</p>
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
      <p>Icon Only Button:</p>
      <br />
      <Button
        as='button'
        style='icon-only'
        onClick={() => {
          console.log('icon only button clicked')
        }}
        id='reset-zi-credits'
      >
        <Icon style='icon-saving' color='brand-red' size='md' />
        Example button
      </Button>
      <hr />
      <br />
      <h2>Avatars</h2>
      <br />
      <br />
      <p>Login Avatar:</p>
      <br />
      <Avatar initials='SA' size='sm' />
      <br />
      <br />
      <p>Card Avatar:</p>
      <br />
      <Avatar initials='SA' size='md' />
      <br />
      <br />
      <h2>Icons</h2>
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
      <h2>Modal/Dialog</h2>
      <br />
      <ExampleComponentWithModal />
      <br />
      <br />
      <h2>Tooltip</h2>
      <br />
      <div>
        Favorites Tooltip{' '}
        <Tooltip
          text="Add to My People's List"
          tooltipId='tooltip-1'
          position='center'
          id='favorite-tooltip'
          onClick={() => {}}
        >
          <Icon style='icon-star-outlined' color='icon-favorite' size='lg' />
        </Tooltip>
      </div>
      <br />
      <br />
      <h2>Alert</h2>
      <br />
      <Alert type='error' id='demo-error'>
        There is a temporary problem connecting to the server. Please wait till
        the connection is reestablished before making changes.
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
        An informational message that conveys information that doesn’t represent
        a risk.
      </Alert>
      <br />
      <br />
      <h2>Flyout Menu</h2>
      <br />
      <ExampleComponentsWithFlyout />
      <br />
      <br />
      <br />
      <h2>Custom Selects</h2>
      <>
        <br />
        <SelectDropdown
          label='company dropdown example 1'
          placeholder='Select:'
          options={options1}
          name='company'
        />
        <br />
        <br />
        <br />
        <SelectDropdown
          label='company dropdown example 2'
          defaultOptionSelected
          options={options2}
          name='company'
        />
        <br />
        <br />
        <br />
        <SelectDropdown
          label='company search example one'
          options={options4}
          isSearchable
          placeholder='Search...'
          name='company'
        />
        <br />
        <br />
        <br />
        <SelectDropdown
          label='company search example 2'
          options={options3}
          isSearchable
          placeholder='Enter company name...'
          name='company'
        />
      </>
      <br />
      <br />
    </Container>
  )
}
