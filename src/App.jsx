import { RouterProvider } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'

import router from './navigation/Router'

function App() {
  return (
    <>
      <Container>
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </>
  )
}
export default App
