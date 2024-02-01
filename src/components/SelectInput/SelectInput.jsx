import css from './SelectInput.module.css'
const SelectInput = ({ inputText, name, data = ['History', 'Politics'] }) => {
  return (
    <div className={css.selectInputContainer}>
      <label htmlFor={name} className={css.lable}>
        {inputText}
      </label>
      <select name={name} id={name} className={css.selectEl}>
        {data.map((el, index) => (
          <option value={el} key={index} className={css.option}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}
export default SelectInput
