import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import Navbar from './components/navbar'
import LoginPage from './login'
import Homedocument from './page/home_document'

const App = () => {
  let routes = useRoutes([
    { path: '/', element: <LoginPage /> },

    { path: '/navbar', element: <Navbar /> },
    { path: '/home-document', element: <Homedocument /> },
  ])
  return routes
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper
