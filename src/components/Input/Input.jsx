import { forwardRef, useState } from 'react'
import css from './Input.module.css'
const Input = forwardRef(function Input({ inputText }, ref) {
  const [error, setError] = useState()
  const chandleChange = (e) => {
    const newValue = e.target.value

    if (newValue === '' || isNaN(newValue) || newValue < 5 || newValue > 15) {
      setError('Value must be a number between 5 and 15.')
    } else {
      setError('')
    }
  }
  return (
    <div className={css.inputContainer}>
      <label htmlFor={name} className={css.lable}>
        {inputText}
        <input
          ref={ref}
          type="number"
          id={name}
          name={name}
          className={css.inputEl}
          min={5}
          max={15}
          placeholder="Min 5 max 15"
          onChange={chandleChange}></input>
      </label>
      {error && <div className={css.error}>{error}</div>}
    </div>
  )
})
export default Input
