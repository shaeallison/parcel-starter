import {
  type MouseEventHandler,
  type ReactNode,
  useEffect,
  useRef,
  useCallback,
  type FC
} from 'react'
import * as styles from './modal.module.css'
import { Button } from '../button/Button'
import { Icon } from '../icons/Icons'
import { Heading } from '../typography'
import { createPortal } from 'react-dom'
interface ModalProps {
  children: ReactNode
  open: boolean
  onRequestClose: () => void
  closeOnOutsideClick: boolean
  title?: string
  theme?: 'default' | 'info' | 'alert' | 'success' | 'error'
}

export const Modal: FC<ModalProps> = ({
  children,
  open,
  onRequestClose,
  closeOnOutsideClick,
  title,
  theme = 'default'
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const lastActiveElement = useRef<HTMLElement | null>(null)

  // control the open state of the modal
  useEffect(() => {
    if (!dialogRef?.current) return

    const dialogNode = dialogRef.current
    if (open) {
      lastActiveElement.current = document.activeElement as HTMLElement
      dialogNode.showModal()
      dialogNode.focus()
    } else if (dialogNode.open) {
      dialogNode.close()
      // TODO: depending on the modals purpose, I think we should set focus back to the
      // triggering element or the new el related to the modal submit so I don't think this is quite right
      if (lastActiveElement.current != null) lastActiveElement.current.focus()
    }
  }, [open])

  // add cancel handling
  const handleCancel = useCallback(
    (event: Event): void => {
      event.preventDefault()
      if (event.target === dialogRef.current) onRequestClose()
    },
    [onRequestClose]
  )
  useEffect(() => {
    if (!dialogRef?.current) return
    const dialogNode = dialogRef.current

    dialogNode.addEventListener('cancel', handleCancel)

    return () => {
      dialogNode.removeEventListener('cancel', handleCancel)
    }
  }, [dialogRef, handleCancel])

  const handleOutsideClick: MouseEventHandler<HTMLDialogElement> = (
    event
  ): void => {
    const dialogNode = dialogRef.current
    if (closeOnOutsideClick && event.target === dialogNode) onRequestClose()
  }

  return createPortal(
    // The interactivity is on the backdrop pseudo-element. There is already a keyboard event for
    // handling closing (esc) so adding a keydown handler is not necessary
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <dialog
      className={styles.modal}
      ref={dialogRef}
      onClick={handleOutsideClick}
    >
      <div className={`${styles['modal-close'] as string}`}>
        <Button
          as='button'
          id='close-modal'
          type='button'
          style='icon-only'
          ariaLabel='close'
          onClick={onRequestClose}
        >
          <Icon style='icon-close' color='brand-red' size='lg' />
        </Button>
      </div>
      <div className={`${styles['modal-container'] as string}`}>
        {typeof title === 'string' && (
          <div className={styles['modal-title']}>
            {theme !== 'default' && (
              <Icon
                style={
                  theme === 'info'
                    ? 'icon-info'
                    : theme === 'alert'
                      ? 'icon-warning'
                      : theme === 'success'
                        ? 'icon-check-outlined'
                        : 'icon-alert'
                }
                color={
                  theme === 'info'
                    ? 'bright-blue'
                    : theme === 'alert'
                      ? 'icon-warn'
                      : theme === 'success'
                        ? 'text-green'
                        : 'brand-red'
                }
                size='xl'
                space='right'
              />
            )}
            <Heading as='h3' level='three'>
              {title}
            </Heading>
          </div>
        )}
        {open ? children : null}
      </div>
    </dialog>,
    document.body
  )
}
