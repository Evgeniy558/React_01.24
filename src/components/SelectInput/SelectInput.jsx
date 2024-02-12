import css from './SelectInput.module.css'
const SelectInput = ({ inputText, name, data }) => {
  return (
    <div className={css.selectInputContainer}>
      <label htmlFor={name} className={css.label}>
        {inputText}
      </label>
      <select name={name} id={name} className={css.selectEl} defaultValue="">
        <option value={''} disabled>
          - Select {name} -
        </option>
        {data.length &&
          data.map((el) => (
            <option value={el.name} key={el.id} className={css.option}>
              {el.name}
            </option>
          ))}
      </select>
    </div>
  )
}
export default SelectInput
