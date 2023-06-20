import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Portfolio from './Portfolio';
import ProjectDetails from './ProjectDetails';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Portfolio/>}/>
        <Route path=":project" element={<ProjectDetails/>}/>
        <Route path='*' element={<h1>This page doesn't exist (yet) please go back to the home screen by clicking the header</h1>}/>
      </Route>
    )
  )
  
    return (
      <RouterProvider router={router}/>
    );
}

export default App;
