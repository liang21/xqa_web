import React, { Component } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router/router'
// import '@/styles/index.scss'

function App() {
  const Outlet = useRoutes(routes)
  return <div className="App">{Outlet}</div>
}

export default App
