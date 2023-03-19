import { Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('@/pages/home/index'))
// const Project = lazy(() => import('@/pages/project/index'))

const withLoadingComponent = (comp: JSX.Element) => (
  <Suspense fallback={<div>Loading</div>}> {comp} </Suspense>
)

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/',
    element: <Navigate to={'/home'} />,
  },
]

export default routes
