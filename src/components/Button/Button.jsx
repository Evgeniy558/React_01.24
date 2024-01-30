import css from './Button.module.css'
const Button = ({ textButton, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={css.button}>
        {textButton}
      </button>
    </>
  )
}
export default Button
