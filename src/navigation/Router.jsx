import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Quiz from '../pages/Quiz/Quiz'
import Results from '../pages/Results/Results'
import Statistics from '../pages/Statistics/Statistics'
import { ROUTES } from './ROUTES'

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />
  },
  {
    path: ROUTES.quiz,
    element: <Quiz />
  },
  {
    path: ROUTES.results,
    element: <Results />
  },
  {
    path: ROUTES.statistics,
    element: <Statistics />
  }
])
export default router
