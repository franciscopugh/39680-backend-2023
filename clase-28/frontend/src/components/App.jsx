import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components 
import { Register } from './Register/Register';
export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>

    </>

  )
}