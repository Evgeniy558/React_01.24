import css from './Input.module.css'
const Input = ({ inputText, name }) => {
  return (
    <div className={css.inputContainer}>
      <label htmlFor={name} className={css.lable}>
        {inputText}
        <input
          type="text"
          id={name}
          name={name}
          className={css.inputEl}
          min={5}
          max={15}
          placeholder="Min 5 max 15"
        ></input>
      </label>
    </div>
  )
}
export default Input
