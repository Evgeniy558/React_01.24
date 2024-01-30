import Button from '../../components/Button/Button'
import SelectInput from '../../components/SelectInput/SelectInput'
import css from './Home.module.css'
const Home = () => {
  return (
    <section>
      <h1 className={css.title}>QUIZ TIME</h1>
      <p>For starting quiz choose:</p>
      <div className={css.inputContainer}>
        <SelectInput inputText="Category:" name="category" />
        <SelectInput
          inputText="Difficulty:"
          name="difficulty"
          data={['Any Difficulty', 'Easy', 'Medium', 'Hard']}
        />
        <SelectInput
          inputText="Select type:"
          name="type"
          data={['Any type', 'Multiple choice', 'TrueFalse']}
        />
        <SelectInput inputText="Time:" name="time" data={['1 minute', '2 minute', '3 minute']} />
      </div>
      <div className={css.buttonContainer}>
        <Button textButton="Start quiz" />
        <Button textButton="See my statistics" />
      </div>
    </section>
  )
}
export default Home
