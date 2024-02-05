import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Landing from './pages/Landing' 
import Analyze from './pages/Analyze'
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/analyze',
      element: <Analyze />
    }

  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
