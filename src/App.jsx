import './App.css'
import Container from './components/Container/Container'
import Home from './pages/Home/Home'
import backGroundFoneTop from './assets/images/backGroundFoneTop.png'

function App() {
  return (
    <>
      <Container>
        <div className="header"></div>
        <Home />
        <div className="footer"></div>
      </Container>
    </>
  )
}
export default App
