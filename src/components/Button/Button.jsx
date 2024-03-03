import css from './Button.module.css'
import { motion } from 'framer-motion'
const Button = ({ textButton, onClick, hoverColor = 'green', value = false }) => {
  const hoverClass =
    hoverColor === 'green' ? css.buttonHoverGreen : hoverColor === 'red' ? css.buttonHoverRed : ''

  return (
    <>
      <motion.button
        onClick={onClick}
        className={`${css.button} ${hoverClass}`}
        value={value}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
        {textButton}
      </motion.button>
    </>
  )
}
export default Button
