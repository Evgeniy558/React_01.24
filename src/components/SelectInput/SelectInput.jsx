const SelectInput = ({ inputText, name, data = ['History', 'Politics'] }) => {
  return (
    <div>
      <label htmlFor={name}> {inputText} </label>
      <select name={name} id={name}>
        {data.map((el, index) => (
          <option value={el} key={index}>
            {el}
          </option>
        ))}
      </select>
    </div>
  )
}
export default SelectInput
