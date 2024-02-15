import { forwardRef, useImperativeHandle, useRef } from 'react'
import css from './SelectInput.module.css'
const SelectInput = forwardRef(function SelectorInput({ inputText, name, data, behavior }, ref) {
  const selectRef = useRef(null)

  useImperativeHandle(ref, () => ({
    getValue: () => {
      const selectedOption = selectRef.current[selectRef.current.selectedIndex]
      return behavior === 'id'
        ? selectedOption.getAttribute('id')
        : selectedOption.value
          ? selectedOption.value
          : `${name} not chosen`
    }
  }))

  return (
    <div className={css.selectInputContainer}>
      <label htmlFor={name} className={css.label}>
        {inputText}
      </label>
      <select name={name} className={css.selectEl} defaultValue="" ref={selectRef}>
        <option value="" disabled>
          - Select {name} -
        </option>
        {data.map((el) => (
          <option id={el.id} value={el.value} key={el.id} className={css.option}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  )
})

export default SelectInput
