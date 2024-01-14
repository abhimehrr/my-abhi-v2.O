// React Router DOM
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Pages
import Index from './pages/Index'
import ProjectView from './pages/ProjectView'
import ErrorPage from './pages/404'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/project-view/:slug',
    element: <ProjectView />
  },
  {
    path: '*',
    element: <ErrorPage />
  },
])


function App() {
  return <RouterProvider router={Router} />
}

export default App