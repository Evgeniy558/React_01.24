import css from './Button.module.css'
const Button = ({ textButton, onClick, hoverColor = 'green' }) => {
  const hoverClass =
    hoverColor === 'green' ? css.buttonHoverGreen : hoverColor === 'red' ? css.buttonHoverRed : ''

  return (
    <>
      <button onClick={onClick} className={`${css.button} ${hoverClass}`}>
        {textButton}
      </button>
    </>
  )
}
export default Button
