import { FC } from 'react'
import css from './Button.module.css'

interface ButtonProps {
  textButton: string
  onClick: () => void
  hoverColor?: 'green' | 'red'
  value?: string
}

const Button: FC<ButtonProps> = ({ textButton, onClick, hoverColor = 'green', value = '' }) => {
  const hoverClass =
    hoverColor === 'green' ? css.buttonHoverGreen : hoverColor === 'red' ? css.buttonHoverRed : ''

  return (
    <>
      <button onClick={onClick} className={`${css.button} ${hoverClass}`} value={value}>
        {textButton}
      </button>
    </>
  )
}
export default Button
