import { ChangeEvent, forwardRef, useState } from 'react'
import css from './Input.module.css'

interface InputProps {
  inputText: string
  onChangeValue?: (value: number | null) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { inputText, onChangeValue },
  ref
) {
  const [error, setError] = useState('Value must be a number between 5 and 15.')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue: number = parseInt(e.target.value)
    if (newValue >= 5 && newValue <= 15) {
      setError('')
      onChangeValue?.(newValue)
    } else {
      setError('Value must be a number between 5 and 15.')
      onChangeValue?.(null)
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
          onChange={handleChange}></input>
      </label>
      {error && <div className={css.error}>{error}</div>}
    </div>
  )
})
export default Input
