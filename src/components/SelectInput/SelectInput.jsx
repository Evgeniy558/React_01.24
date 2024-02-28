import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import css from './SelectInput.module.css'
const SelectInput = forwardRef(function SelectorInput({ inputText, name, data, behavior }, ref) {
  const selectRef = useRef(null)
  const [error, setError] = useState('')

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selectedOption = selectRef.current[selectRef.current.selectedIndex]
      if (!selectedOption) {
        setError(`Please select a ${name}.`)
      }
      setError('')
      return behavior === 'id'
        ? {
            id: selectedOption.getAttribute('id'),
            value: selectedOption.value ? selectedOption.value : `${name} not chosen`
          }
        : selectedOption.value
          ? selectedOption.value
          : `${name} not chosen`
    }
  }))

  const handleChange = (e) => {
    if (!e.target.value) {
      setError(`Please select a ${name}.`)
    } else {
      setError('')
    }
  }
  return (
    <div className={css.selectInputContainer}>
      <label htmlFor={name} className={css.label}>
        {inputText}
      </label>
      <select
        name={name}
        className={css.selectEl}
        defaultValue=""
        ref={selectRef}
        onClick={handleChange}>
        <option value="" disabled>
          - Select {name} -
        </option>
        {data.map((el) => (
          <option id={el.id} value={el.value} key={el.id} className={css.option}>
            {el.name}
          </option>
        ))}
      </select>
      {error && <div className={css.error}>{error}</div>}
    </div>
  )
})

export default SelectInput
