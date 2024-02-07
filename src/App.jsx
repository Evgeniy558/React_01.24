import './App.css'
import Container from './components/Container/Container'
import Home from './pages/Home/Home'
import Quiz from './pages/Quiz/Quiz'
import Results from './pages/Results/Results'

function App() {
  return (
    <>
      <Container>
        <div className="header"></div>
        <Home />
        <Quiz
          question={
            'Question text:  Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, porro cupiditate, corporis at saepe recusandae nemo numquam officiis ducimus nobis dolor cum minima voluptas quidem sapiente est eligendi eius corrupti!'
          }></Quiz>
        <Results></Results>
        <div className="footer"></div>
      </Container>
    </>
  )
}
export default App
