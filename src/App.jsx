import { RouterProvider } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'

import router from './navigation/Router'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Container>
          <RouterProvider router={router}></RouterProvider>
        </Container>
      </Provider>
    </>
  )
}
export default App
