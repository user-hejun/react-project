import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import AppLayout from '@/layout'

const Home = lazy(() => import('@/pages/home')) 
const About  = lazy(() => import('@/pages/about'))
const Login = lazy(() => import('@/pages/login'))
const Detail = lazy(() => import('@/pages/detail'))

const router: RouteObject[]  = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />,
        
      },
      {
        path: 'about/detail/:id',
        element: <Detail />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  }
  
]

export default router
