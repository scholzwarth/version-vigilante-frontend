import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './assets/styles/App.scss'
import { ThemeProvider } from 'react-bootstrap';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useVH from 'react-viewport-height';
import HomePage from './pages/HomePage';
import AppLayout from './layouts/AppLayout';
import ErrorPage from './pages/ErrorPage';
import Projects from './pages/Projects';

function App() {
  useVH();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: true,
        structuralSharing: false,
        retry: false,
        retryCount: 0,
        staleTime: 1000 * 60 * 15, // 15 minutes
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/projects', element: <Projects /> }
      ],
    },

  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ToastContainer
            autoClose={4000}
            hideProgressBar={false}
            position={'top-center'}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            progress={undefined}
            theme={'dark'}
          />
          <RouterProvider router={router} />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
