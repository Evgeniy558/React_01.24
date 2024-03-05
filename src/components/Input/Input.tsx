import { ChangeEvent, forwardRef, useState } from 'react'
import css from './Input.module.css'

interface InputProps {
  inputText: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ inputText }, ref) {
  const [error, setError] = useState('')
  const chandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value)

    if (newValue === null || isNaN(newValue) || newValue < 5 || newValue > 15) {
      setError('Value must be a number between 5 and 15.')
    } else {
      setError('')
    }
  }
  return (
    <div className={css.inputContainer}>
      <label className={css.lable}>
        {inputText}
        <input
          ref={ref}
          type="number"
          className={css.inputEl}
          min={5}
          max={15}
          placeholder="Min 5 max 15"
          onChange={chandleChange}
        ></input>
      </label>
      {error && <div className={css.error}>{error}</div>}
    </div>
  )
})
export default Input
