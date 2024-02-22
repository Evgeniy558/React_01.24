import { RouterProvider } from 'react-router-dom'
import './App.css'
import Container from './components/Container/Container'

import router from './navigation/Router'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Container>
            <RouterProvider router={router}></RouterProvider>
          </Container>
        </PersistGate>
      </Provider>
    </>
  )
}
export default App
