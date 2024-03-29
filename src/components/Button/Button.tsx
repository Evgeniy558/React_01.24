import { FC } from 'react'
import css from './Button.module.css'
import { motion } from 'framer-motion'
interface ButtonProps {
  textButton: string
  isDisable?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  hoverColor?: 'green' | 'red'
  value?: string
}

const Button: FC<ButtonProps> = ({
  textButton,
  isDisable = false,
  onClick,
  hoverColor = 'green',
  value = ''
}) => {
  const hoverClass =
    hoverColor === 'green' ? css.buttonHoverGreen : hoverColor === 'red' ? css.buttonHoverRed : ''

  return (
    <>
      <motion.button
        onClick={onClick}
        className={`${css.button} ${hoverClass}`}
        value={value}
        disabled={isDisable}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        {textButton}
      </motion.button>
    </>
  )
}
export default Button
