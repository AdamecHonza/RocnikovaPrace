import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ReservationPage from './pages/Reservation';

export default function App() {
  
  return( 
    <>
 
   <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/ReservationPage' element={<ReservationPage/>}/>
   </Routes>
</>
   )
}


