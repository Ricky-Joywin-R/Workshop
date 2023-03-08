import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import AddCarInformation from './components/AddCarInformation'
import CarInformation from './components/CarInformation'
function App(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<AddCarInformation/>}></Route>
    <Route exact path="/table" element={<CarInformation/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;
