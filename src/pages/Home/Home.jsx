/* eslint-disable prettier/prettier */
import Button from '../../components/Button/Button'
import SelectInput from '../../components/SelectInput/SelectInput'
import css from './Home.module.css'
import Input from '../../components/Input/Input'
import Quiz from '../Quiz/Quiz'

const Home = () => {
  return (
    <>
      <section>
        <h1 className={css.title}>QUIZ TIME</h1>
        <p className={css.text}>For starting quiz choose:</p>
        <div className={css.formContainer}>
          <Input inputText="Number of questions" name="numOfQuestions" />
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
            <SelectInput
              inputText="Time:"
              name="time"
              data={['1 minute', '2 minute', '3 minute']}
            />
          </div>
        </div>
        <div className={css.buttonContainer}>
          <Button textButton="Start quiz" />
          <Button textButton="See my statistics" />
        </div>
      </section>{' '}
      <Quiz
        question={
          'Question text:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro cupiditate, corporis at saepe recusandae nemo numquam officiis ducimus nobis dolor cum minima voluptas quidem sapiente est eligendi eius corrupti!'
        }></Quiz>
    </>
  )
}
export default Home
