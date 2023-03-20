import { Navigate } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Home = lazy(() => import('@/pages/home/index'))
const Project = lazy(() => import('@/pages/project/index'))

const withLoadingComponent = (comp: JSX.Element) => (
  <Suspense fallback={<div>Loading</div>}> {comp} </Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to={'/project'} />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/project',
        element: withLoadingComponent(<Project />),
      },
    ],
  },
]

export default routes
