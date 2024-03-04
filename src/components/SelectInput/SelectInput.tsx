import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import css from './SelectInput.module.css'

interface QuizQuestion {
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

interface SelectorInputProps {
  inputText: string
  name: string
  data: QuizQuestion[]
  behavior: 'id' | 'value'
}

interface SelectInputRef {
  getValue: () => any
}

const SelectInput = forwardRef<SelectInputRef, SelectorInputProps>(function SelectorInput(
  { inputText, name, data, behavior },
  ref
) {
  const selectRef = useRef<HTMLSelectElement | null>(null)
  const [error, setError] = useState('')

  useImperativeHandle(ref, () => ({
    getValue: () => {
      if (!selectRef.current) {
        console.error('Select element is not mounted')
        return { value: `${name} not chosen` }
      }
      const selectedOption = selectRef.current[selectRef.current.selectedIndex] as HTMLOptionElement

      if (!selectedOption) {
        setError(`Please select a ${name}.`)
        return { value: `${name} not chosen` }
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
