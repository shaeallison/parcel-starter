// An example of the components required to build a modal UI
import { useState } from 'react'
import { Modal } from '../../components/shared/modal/Modal'
import { Button } from '../../components/shared/button/Button'
import { Icon } from '../../components/shared/icons/Icons'
import { Text } from '../../components/shared/typography'
import * as styles from './exampleModal.module.css'

export const ExampleComponentWithModal = (): JSX.Element => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const toggleDialog = (): void => {
    document.body.classList.add('overflow-hidden')
    setDialogOpen((bool) => !bool)
  }
  const closeDialog = (): void => {
    document.body.classList.remove('overflow-hidden')
    setDialogOpen(false)
  }

  const [basicDialogOpen, setBasicDialogOpen] = useState(false)
  const toggleBasicDialog = (): void => {
    document.body.classList.add('overflow-hidden')
    setBasicDialogOpen((bool) => !bool)
  }
  const closeBasicDialog = (): void => {
    document.body.classList.remove('overflow-hidden')
    setBasicDialogOpen(false)
  }

  const [alertDialogOpen, setAlertDialogOpen] = useState(false)
  const toggleAlertDialog = (): void => {
    document.body.classList.add('overflow-hidden')
    setAlertDialogOpen((bool) => !bool)
  }
  const closeAlertDialog = (): void => {
    document.body.classList.remove('overflow-hidden')
    setAlertDialogOpen(false)
  }

  const [successDialogOpen, setSuccessDialogOpen] = useState(false)
  const toggleSuccessDialog = (): void => {
    document.body.classList.add('overflow-hidden')
    setSuccessDialogOpen((bool) => !bool)
  }
  const closeSuccessDialog = (): void => {
    document.body.classList.remove('overflow-hidden')
    setSuccessDialogOpen(false)
  }

  const [errorDialogOpen, setErrorDialogOpen] = useState(false)
  const toggleErrorDialog = (): void => {
    document.body.classList.add('overflow-hidden')
    setErrorDialogOpen((bool) => !bool)
  }
  const closeErrorDialog = (): void => {
    document.body.classList.remove('overflow-hidden')
    setErrorDialogOpen(false)
  }

  const [infoDialogOpen, setInfoDialogOpen] = useState(false)
  const toggleInfoDialog = (): void => {
    document.body.classList.add('overflow-hidden')
    setInfoDialogOpen((bool) => !bool)
  }
  const closeInfoDialog = (): void => {
    document.body.classList.remove('overflow-hidden')
    setInfoDialogOpen(false)
  }

  return (
    <>
      <Button
        as='button'
        type='button'
        style='secondary'
        onClick={toggleDialog}
      >
        <Icon style='icon-plus' color='brand-red' size='md' space='right' /> Add
        Company
      </Button>
      <Modal
        open={dialogOpen}
        onRequestClose={closeDialog}
        closeOnOutsideClick
        title='Add a Company'
      >
        unique content inside modal
      </Modal>
      <br />
      <br />
      <Button
        as='button'
        type='button'
        style='secondary'
        onClick={toggleBasicDialog}
      >
        No Title
      </Button>
      <Modal
        open={basicDialogOpen}
        onRequestClose={closeBasicDialog}
        closeOnOutsideClick
      >
        <Text as='p' style='detail' color='black' weight='semibold'>
          This modal has no title and no theme, could be used for a dismissable
          message.
        </Text>
      </Modal>
      <br />
      <br />
      <Button
        as='button'
        type='button'
        style='secondary'
        onClick={toggleAlertDialog}
      >
        Alert Modal
      </Button>
      <Modal
        open={alertDialogOpen}
        onRequestClose={closeAlertDialog}
        closeOnOutsideClick
        title='Delete Company'
        theme='alert'
      >
        <Text as='p' style='detail' color='black' weight='semibold'>
          You are about to remove &apos;company_name&apos; from your Call List
          along with all contacts associated. Are you sure you want to continue?
        </Text>
        <br />
        <br />
        <Button
          as='button'
          type='button'
          style='primary'
          onClick={toggleAlertDialog}
        >
          Confirm
        </Button>

        <Button
          as='button'
          type='button'
          style='primary'
          onClick={toggleAlertDialog}
          className={styles.cancel}
        >
          Cancel
        </Button>
      </Modal>

      <br />
      <br />
      <Button
        as='button'
        type='button'
        style='secondary'
        onClick={toggleInfoDialog}
      >
        Info Modal
      </Button>
      <Modal
        open={infoDialogOpen}
        onRequestClose={closeInfoDialog}
        closeOnOutsideClick
        title='Information'
        theme='info'
      >
        <Text as='p' style='detail' color='black' weight='semibold'>
          Here is some helpful info!
        </Text>
      </Modal>

      <br />
      <br />
      <Button
        as='button'
        type='button'
        style='secondary'
        onClick={toggleErrorDialog}
      >
        Error Modal
      </Button>
      <Modal
        open={errorDialogOpen}
        onRequestClose={closeErrorDialog}
        closeOnOutsideClick
        title='Error!'
        theme='error'
      >
        <Text as='p' style='detail' color='black' weight='semibold'>
          An error has occurred.
        </Text>
      </Modal>

      <br />
      <br />
      <Button
        as='button'
        type='button'
        style='secondary'
        onClick={toggleSuccessDialog}
      >
        Success Modal
      </Button>
      <Modal
        open={successDialogOpen}
        onRequestClose={closeSuccessDialog}
        closeOnOutsideClick
        title='Success!'
        theme='success'
      >
        <Text as='p' style='detail' color='black' weight='semibold'>
          You did it! Yay!
        </Text>
      </Modal>
    </>
  )
}
